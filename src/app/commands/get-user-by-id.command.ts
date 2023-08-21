import {ICommand} from "@app-core/command-bus/interfaces/command.interface";

export class GetUserByIdCommand implements ICommand {
  payload: string;

  constructor(userId: string) {
    this.payload = userId;
  }
}
