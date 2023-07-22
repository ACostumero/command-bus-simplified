import { Inject, Injectable } from '@angular/core';
import {ICommand} from './interfaces/command.interface';
import {ICommandHandler} from './interfaces/command-handler.interface';
import {COMMAND_HANDLERS} from './tokens/command-handler.token';
import {CommandHandlerNotRegistered} from './errors/command-handler-not-registered.error';

@Injectable()
export class CommandBus {
  constructor(@Inject(COMMAND_HANDLERS) private handlers: Map<string, ICommandHandler>) {

  }

  public dispatch(command: ICommand): void {
    console.log(`%c[CommandBus] Dispatching -> ${command.constructor.name}`, "color:greenyellow;");
    const handler = this.getHandler(command.constructor.name);
    if(!handler) throw new CommandHandlerNotRegistered();
    handler.handle(command);
  }

  public getHandler(commandName: string) {
    return this.handlers.get(commandName);
  }

}
