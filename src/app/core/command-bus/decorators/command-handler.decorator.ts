import {HANDLERS_METADATA_COMMAND_NAME} from "@app-core/tokens/handlers-metadata-command-name.token";
import 'reflect-metadata';

export function CommandHandler(commandName: string): ClassDecorator {
  return (target: any) => {
    Reflect.defineMetadata(HANDLERS_METADATA_COMMAND_NAME, commandName, target);
  };
}
