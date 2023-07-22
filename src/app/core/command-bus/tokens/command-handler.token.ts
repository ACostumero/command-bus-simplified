import {InjectionToken} from "@angular/core";
import {ICommandHandler} from "../interfaces/command-handler.interface";

export const COMMAND_HANDLERS = new InjectionToken<Map<string, ICommandHandler>>('COMMAND_HANDLERS');
