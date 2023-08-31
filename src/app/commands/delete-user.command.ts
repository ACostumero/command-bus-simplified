import {ICommand} from "@app-core/command-bus/interfaces/command.interface";

export class DeleteUserCommand implements ICommand {
  payload: number;

  constructor(userId: number) {
    this.payload = userId;
  }
}
