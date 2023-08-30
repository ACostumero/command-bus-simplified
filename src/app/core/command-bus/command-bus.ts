import {Injectable, OnDestroy} from '@angular/core';
import {ICommand} from './interfaces/command.interface';
import {CommandHandlerNotRegistered} from './errors/command-handler-not-registered.error';
import {CommandHandlerRegistryService} from './services/command-handler-registry.service';
import {BehaviorSubject, EMPTY, Observable, Subject, Subscription, TimeoutError, catchError, concatMap, finalize, from, of, takeUntil, tap, throwError, timeout, toArray} from 'rxjs';
import {Logger} from '@app-core/utils/logger.util';

@Injectable({providedIn: 'root'})
export class CommandBus implements OnDestroy {
  /**
   * Maximum time allowed for executing a command in milliseconds.
   * If a command's execution time exceeds this threshold, a timeout error is triggered.
   * This timeout helps prevent memory leaks and automatically closes the subscription
   * if no command is received within the specified time.
   */
  private static readonly _COMMAND_EXECUTION_TIMEOUT = 5000;

  private readonly _commandQueueSource$: BehaviorSubject<ICommand[]> = new BehaviorSubject<ICommand[]>([]);
  private readonly _destroySource$: Subject<void> = new Subject<void>();

  private _queueSubscription$?: Subscription;

  constructor (private readonly commandHandlerRegistryService: CommandHandlerRegistryService) {
    this._initializeQueue();
  }

  ngOnDestroy(): void {
    this._destroySource$.next();
  }

  public dispatch(command: ICommand): void {
    this._addToQueue([command]);
  }

  public dispatchPipeline(commands: ICommand[]): void {
    this._addToQueue(commands);
  }

  public checkSubscriptionAlive() {
    Logger.info(`Is subscription alive?' -> ${!this._queueSubscription$?.closed}`);
  }

  private _initializeQueue(): void {
    this._queueSubscription$ = this._commandQueueSource$.pipe(
      takeUntil(this._destroySource$),
      concatMap(commands => this._executeCommandQueue(commands)),
      timeout(CommandBus._COMMAND_EXECUTION_TIMEOUT),
      finalize(() => this._destroySource$.next()),
      catchError((e: unknown) => {
        if(e instanceof TimeoutError) {
          return EMPTY;
        }
        return throwError(() => e);
      })
    ).subscribe();
  }

  private _addToQueue(commands: ICommand[]): void {
    this._reinitializeQueueIfClosed();
    this._commandQueueSource$.next(commands);
  }

  private _reinitializeQueueIfClosed() {
    if (this._queueSubscription$?.closed) {
      this._initializeQueue();
    }
  }

  private _executeHandler(command: ICommand): Observable<unknown> {
    const handler = this._getHandler(command.constructor.name);
    return handler.handle(command);
  }

  private _getHandler(commandName: string) {
    const handler = this.commandHandlerRegistryService.getHandler(commandName);
    if (!handler) throw new CommandHandlerNotRegistered();
    return handler;
  }

  private _executeCommandQueue(commands: ICommand[]): Observable<unknown> {
    return from(commands).pipe(
      concatMap(command => this._executeHandler(command)),
      toArray());
  }
}
