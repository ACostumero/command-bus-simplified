import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {ICommand} from "@app-core/command-bus/interfaces/command.interface";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {Injectable} from "@angular/core";
import {Logger} from "@app-core/utils/logger.util";
import {EMPTY} from "rxjs";
import {GetColorResourcesCommand} from "@app-commands/get-color-resources.command";

@Injectable()
@CommandHandler('GetColorResourcesCommand')
export class GetColorResourcesCommandHandler implements ICommandHandler {

  handle(command: GetColorResourcesCommand) {
    Logger.info('[GetColorResourcesCommandHandler] -> handle()');
    return EMPTY;
  }
}

