import {Injectable} from "@angular/core";
import {ResetUsersCommand} from "@app-commands/reset-users.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {Logger} from "@app-core/utils/logger.util";
import {UsersState} from "@app-modules/users/state/users.state";
import {EMPTY} from "rxjs";

@Injectable()
@CommandHandler('ResetUsersCommand')
export class ResetUsersCommandHandler implements ICommandHandler {

  constructor(private readonly _usersState: UsersState) {}

  public handle(command: ResetUsersCommand) {
    Logger.info('[ResetUsersCommandHandler] -> handle()');
    this._usersState.setUsers([]);
    return EMPTY;
  }
}
