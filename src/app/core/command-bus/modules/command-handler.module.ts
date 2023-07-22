import { ModuleWithProviders, NgModule, inject } from '@angular/core';
import {COMMAND_HANDLER_PROVIDERS} from '@app-core/constants/command-handlers.const';
import {COMMAND_HANDLERS} from '../tokens/command-handler.token';
import {ICommandHandler} from '../interfaces/command-handler.interface';
import {HANDLERS_METADATA_COMMAND_NAME} from '@app-core/tokens/handlers-metadata-command-name.token';

@NgModule()
export class CommandHandlerModule {
  static forRoot(): ModuleWithProviders<CommandHandlerModule> {
    return {
      ngModule: CommandHandlerModule,
      providers: [
        COMMAND_HANDLER_PROVIDERS,
        {
          provide: COMMAND_HANDLERS,
          useFactory: commandHandlerRegisterFactory,
          deps: [COMMAND_HANDLER_PROVIDERS]
        }
      ]
    };
  }
}

export function commandHandlerRegisterFactory() {
const handlers: Map<string, ICommandHandler> = new Map();
  COMMAND_HANDLER_PROVIDERS.forEach(handler => {

    const handlerClass = inject(handler);
    const commandName = Reflect.getMetadata(HANDLERS_METADATA_COMMAND_NAME, handler);

    console.log(`%c[CommandHandlerRegistry] Associating command ${commandName} with handler -> ${handler.constructor.name}`, "color:steelblue; font-weight: bold");
    handlers.set(commandName, handlerClass);
  });
  return handlers;
}
