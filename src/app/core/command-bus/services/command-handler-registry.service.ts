import {Injectable, Type, inject} from "@angular/core";
import { ICommandHandler } from '@app-core/command-bus/interfaces/command-handler.interface';
import {HANDLERS_METADATA_COMMAND_NAME} from "@app-core/tokens/handlers-metadata-command-name.token";
import {Logger} from "@app-core/utils/logger.util";

@Injectable({providedIn: 'root'})
export class CommandHandlerRegistryService {
  private readonly handlersMap: Map<string, ICommandHandler> = new Map();

  registerHandlers(newCommandHandlersMap: Type<ICommandHandler>[]) {
    newCommandHandlersMap.forEach((handler: Type<ICommandHandler>) => {
      const handlerClass = inject(handler);
      const commandName = Reflect.getMetadata(HANDLERS_METADATA_COMMAND_NAME, handler);
      Logger.info(`[CommandHandlerRegistry] Associating command ${commandName} with handler -> ${handlerClass.constructor.name}`);
      this.handlersMap.set(commandName, handlerClass);
    });
  }

  getHandler(commandName: string): ICommandHandler | undefined {
    return this.handlersMap.get(commandName);
  }

}
