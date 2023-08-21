import {InjectionToken} from "@angular/core";
import { ICommandHandler } from '@app-core/command-bus/interfaces/command-handler.interface';

export const COMMAND_HANDLERS = new InjectionToken<Map<string, ICommandHandler>>('COMMAND_HANDLERS');
