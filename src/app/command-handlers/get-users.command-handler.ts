import {Injectable} from "@angular/core";
import {GetUsersCommand} from "@app-commands/get-users.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";

@Injectable()
@CommandHandler('GetUsersCommand')
export class GetUsersCommandHandler implements ICommandHandler {

  public handle(command: GetUsersCommand) {

  }
}
