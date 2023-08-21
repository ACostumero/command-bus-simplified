import {Injectable} from "@angular/core";
import {GetUserByIdCommand} from "@app-commands/get-user-by-id.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";

@Injectable()
@CommandHandler('GetUsersCommand')
export class GetUserByIdCommandHandler implements ICommandHandler {

  public handle(command: GetUserByIdCommand) {

  }
}
