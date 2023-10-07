import {Injectable} from "@angular/core";
import { ResetSelectedUserCommand } from "@app-commands/reset-selected-user.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {Logger} from "@app-core/utils/logger.util";
import {UsersState} from "@app-modules/users/state/users.state";
import {EMPTY} from "rxjs";

@Injectable()
@CommandHandler('ResetSelectedUserCommand')
export class ResetSelectedUserCommandHandler implements ICommandHandler {

  constructor(private readonly _usersState: UsersState) {}

  public handle(command: ResetSelectedUserCommand) {
    Logger.info('[ResetSelectedUserCommandHandler] -> handle()');
    this._usersState.setSelectedUser(null);
    return EMPTY;
  }
}
