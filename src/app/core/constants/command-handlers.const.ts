import {Type} from "@angular/core";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {GetColorResourcesCommandHandler} from "@app-modules/color-resources/command/get-color-resources.command-handler";

export const COMMAND_HANDLER_PROVIDERS: Type<ICommandHandler>[] = [
  GetColorResourcesCommandHandler,
];
