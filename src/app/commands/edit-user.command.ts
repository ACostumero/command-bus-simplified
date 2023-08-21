import {ICommand} from "@app-core/command-bus/interfaces/command.interface";
import {IUser} from "@app-core/interfaces/user.interface";

export class EditUserCommand implements ICommand {
  payload: IUser;

  constructor(user: IUser) {
    this.payload = user;
  }
}
