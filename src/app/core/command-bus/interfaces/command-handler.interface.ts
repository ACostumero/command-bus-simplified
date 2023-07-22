import {ICommand} from "./command.interface";

export interface ICommandHandler {
  handle(command: ICommand): void;
}
