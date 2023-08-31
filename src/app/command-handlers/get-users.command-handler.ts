import {Injectable} from "@angular/core";
import {GetUsersCommand} from "@app-commands/get-users.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {IUser} from "@app-core/interfaces/user.interface";
import {UserService} from "@app-core/services/user.service";
import {Logger} from "@app-core/utils/logger.util";
import {UsersState} from "@app-modules/users/state/users.state";
import {delay, first, tap} from "rxjs";

@Injectable()
@CommandHandler('GetUsersCommand')
export class GetUsersCommandHandler implements ICommandHandler {

  constructor(
    private readonly _userService: UserService,
    private readonly _usersState: UsersState) {}

  public handle(command: GetUsersCommand) {
    Logger.info('[GetUsersCommandHandler] -> handle()');
    return this._userService.getAll().pipe(
      first(),
      delay(500), // For loader testing purposes only
      tap((users: IUser[]) => this._usersState.setUsers(users))
    );
  }
}
