import {Injectable} from "@angular/core";
import {GetUserByIdCommand} from "@app-commands/get-user-by-id.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {Logger} from "@app-core/utils/logger.util";
import {EMPTY} from "rxjs";

@Injectable()
@CommandHandler('GetUserByIdCommand')
export class GetUserByIdCommandHandler implements ICommandHandler {

  public handle(command: GetUserByIdCommand) {
    Logger.info('[GetUserByIdCommandHandler] -> handle()');
    return EMPTY;
  }
}
