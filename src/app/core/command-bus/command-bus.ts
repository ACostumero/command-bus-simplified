import { Injectable } from '@angular/core';
import {ICommand} from './interfaces/command.interface';
import {CommandHandlerNotRegistered} from './errors/command-handler-not-registered.error';
import {CommandHandlerRegistryService} from './services/command-handler-registry.service';

@Injectable({providedIn: 'root'})
export class CommandBus {
  constructor(private readonly commandHandlerRegistryService: CommandHandlerRegistryService) {

  }

  public dispatch(command: ICommand): void {
    console.log(`%c[CommandBus] Dispatching -> ${command.constructor.name}`, "color:greenyellow;");
    const handler = this.getHandler(command.constructor.name);
    if(!handler) throw new CommandHandlerNotRegistered();
    handler.handle(command);
  }

  public getHandler(commandName: string) {
    return this.commandHandlerRegistryService.getHandler(commandName);
  }
}
