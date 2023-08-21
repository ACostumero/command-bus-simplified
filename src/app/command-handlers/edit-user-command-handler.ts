import {Injectable} from "@angular/core";
import {EditUserCommand} from "@app-commands/edit-user.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {Logger} from "@app-core/utils/logger.util";

@Injectable()
@CommandHandler('EditUserCommand')
export class EditUserCommandHandler implements ICommandHandler {

  public handle(command: EditUserCommand) {
    Logger.info('[EditUserCommandHandler] -> handle()');
  }
}
