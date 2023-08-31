import {Injectable} from "@angular/core";
import {EditUserCommand} from "@app-commands/edit-user.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {IUser} from "@app-core/interfaces/user.interface";
import {UserService} from "@app-core/services/user.service";
import {Logger} from "@app-core/utils/logger.util";
import {UsersState} from "@app-modules/users/state/users.state";
import {first, tap} from "rxjs";

@Injectable()
@CommandHandler('EditUserCommand')
export class EditUserCommandHandler implements ICommandHandler {

  constructor(
    private readonly _userService: UserService,
    private readonly _usersState: UsersState) {}

  public handle(command: EditUserCommand) {
    Logger.info('[EditUserCommandHandler] -> handle()');
    return this._userService.edit(command.payload).pipe(
      first(),
      tap((userUpdated: IUser) => this._usersState.updateUser(userUpdated)));
  }
}
