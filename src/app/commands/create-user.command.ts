import {ICommand} from "@app-core/command-bus/interfaces/command.interface";
import {TUserWithoutId} from "@app-core/interfaces/user.interface";

export class CreateUserCommand implements ICommand {
  payload: TUserWithoutId;

  constructor(user: TUserWithoutId) {
    this.payload = user;
  }
}
