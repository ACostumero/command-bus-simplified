import {Injectable} from "@angular/core";
import {DeleteUserCommand} from "@app-commands/delete-user.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {UserService} from "@app-core/services/user.service";
import {Logger} from "@app-core/utils/logger.util";
import {UsersState} from "@app-modules/users/state/users.state";
import {filter, first, tap} from "rxjs";

@Injectable()
@CommandHandler('DeleteUserCommand')
export class DeleteUserCommandHandler implements ICommandHandler {
  constructor(
    private readonly _userService: UserService,
    private readonly _usersState: UsersState) {}

  public handle(command: DeleteUserCommand) {
    Logger.info('[DeleteUserCommandHandler] -> handle()');
    return this._userService.delete(command.payload).pipe(
      first(),
      filter(Boolean),
      tap(() => this._usersState.removeUser(command.payload))
      );
  }
}
