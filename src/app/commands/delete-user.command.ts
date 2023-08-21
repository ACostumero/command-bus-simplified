import {ICommand} from "@app-core/command-bus/interfaces/command.interface";

export class DeleteUserCommand implements ICommand {
  payload: string;

  constructor(userId: string) {
    this.payload = userId;
  }
}
