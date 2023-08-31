import {Injectable} from "@angular/core";
import {CreateUserCommand} from "@app-commands/create-user.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {UserService} from "@app-core/services/user.service";
import {Logger} from "@app-core/utils/logger.util";
import {first} from "rxjs";

@Injectable()
@CommandHandler('CreateUserCommand')
export class CreateUserCommandHandler implements ICommandHandler {
constructor(private readonly _userService: UserService) {}

  public handle(command: CreateUserCommand) {
    Logger.info('[CreateUserCommandHandler] -> handle()');
    return this._userService.create(command.payload).pipe(first());
  }
}
