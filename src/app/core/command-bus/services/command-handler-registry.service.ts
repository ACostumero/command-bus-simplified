import {Injectable, Type, inject} from "@angular/core";
import { ICommandHandler } from '@app-core/command-bus/interfaces/command-handler.interface';
import {HANDLERS_METADATA_COMMAND_NAME} from "@app-core/tokens/handlers-metadata-command-name.token";

@Injectable({providedIn: 'root'})
export class CommandHandlerRegistryService {
  private readonly handlersMap: Map<string, ICommandHandler> = new Map();

  registerHandlers(newCommandHandlersMap: Type<ICommandHandler>[]) {
    console.log('llegan handlers', newCommandHandlersMap);

    newCommandHandlersMap.forEach((handler: Type<ICommandHandler>) => {
      const handlerClass = inject(handler);
      const commandName = Reflect.getMetadata(HANDLERS_METADATA_COMMAND_NAME, handler);
      console.log(`%c[CommandHandlerRegistry] Associating command ${commandName} with handler -> ${handler.constructor.name}`, "color:steelblue; font-weight: bold");
      this.handlersMap.set(commandName, handlerClass);
    });
  }

  getHandler(commandName: string): ICommandHandler | undefined {
    return this.handlersMap.get(commandName);
  }

  printHandlers() {
    console.log('handlers registrados:');
    for (let key of this.handlersMap.keys()) {
      console.log(key);
  }

  }

}
