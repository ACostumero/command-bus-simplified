import {Injectable} from "@angular/core";
import {DeleteUserCommand} from "@app-commands/delete-user.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {Logger} from "@app-core/utils/logger.util";

@Injectable()
@CommandHandler('DeleteUserCommand')
export class DeleteUserCommandHandler implements ICommandHandler {

  public handle(command: DeleteUserCommand) {
    Logger.info('[DeleteUserCommandHandler] -> handle()');
  }
}
