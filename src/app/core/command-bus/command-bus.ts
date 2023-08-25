import { Injectable } from '@angular/core';
import {ICommand} from './interfaces/command.interface';
import {CommandHandlerNotRegistered} from './errors/command-handler-not-registered.error';
import {CommandHandlerRegistryService} from './services/command-handler-registry.service';
import {Observable, Subject, Subscription, concatMap, finalize, first, from, take, takeUntil, toArray} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CommandBus {

  private readonly _destroySource$: Subject<void> = new Subject<void>();
  private _subscription?: Subscription;

  constructor(private readonly commandHandlerRegistryService: CommandHandlerRegistryService) {}


  public dispatch(command: ICommand): void {
    console.log(`%c[CommandBus] Dispatching -> ${command.constructor.name}`, "color:greenyellow;");
    // I use take(1) instead first() because first() causes "empty error sequence" when there
    // are no elements in the input stream (when the single handler returns EMPTY, for example).
    // take(1) closes the Observable without any elements correctly
    this._executeHandler(command).pipe(take(1)).subscribe();
  }

  public dispatchPipeline(commands: ICommand[]): void {
    this._subscription = from(commands).pipe(
      takeUntil(this._destroySource$),
      concatMap((command: ICommand) => this._executeHandler(command)),
      finalize(() => this._destroySource$.next())
    ).subscribe({
      next: (e) => console.log('handler next'),
      complete: () => console.log('handler completed', this._subscription?.closed)}
      );
  }

  public checkSubscriptionAlive() {
    console.log('Is subscription alive?', !this._subscription?.closed);
  }

  private _getHandler(commandName: string) {
    const handler = this.commandHandlerRegistryService.getHandler(commandName);
    if(!handler) throw new CommandHandlerNotRegistered();
    return handler;
  }

  private _executeHandler(command: ICommand): Observable<unknown> {
    const handler = this._getHandler(command.constructor.name);
    return handler.handle(command);
  }
}
