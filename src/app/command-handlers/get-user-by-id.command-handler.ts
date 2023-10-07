import {Injectable} from "@angular/core";
import {GetUserByIdCommand} from "@app-commands/get-user-by-id.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import { IUser } from "@app-core/interfaces/user.interface";
import { UserService } from "@app-core/services/user.service";
import {Logger} from "@app-core/utils/logger.util";
import { UsersState } from "@app-modules/users/state/users.state";
import {first, tap} from "rxjs";

@Injectable()
@CommandHandler('GetUserByIdCommand')
export class GetUserByIdCommandHandler implements ICommandHandler {

  constructor(
    private readonly _userService: UserService,
    private readonly _usersState: UsersState) {}

  public handle(command: GetUserByIdCommand) {
    Logger.info('[GetUserByIdCommandHandler] -> handle()');
    return this._userService.getById(command.payload).pipe(
      first(),
      tap((user: IUser) => this._usersState.setSelectedUser(user))
    );
  }
}
