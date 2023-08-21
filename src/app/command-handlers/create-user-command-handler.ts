import {Injectable} from "@angular/core";
import {CreateUserCommand} from "@app-commands/create-user.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {Logger} from "@app-core/utils/logger.util";

@Injectable()
@CommandHandler('CreateUserCommand')
export class CreateUserCommandHandler implements ICommandHandler {

  public handle(command: CreateUserCommand) {
    Logger.info('[CreateUserCommandHandler] -> handle()');
  }
}
