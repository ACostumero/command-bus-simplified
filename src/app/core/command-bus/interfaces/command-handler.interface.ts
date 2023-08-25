import {Observable} from "rxjs";
import {ICommand} from "./command.interface";

export interface ICommandHandler {
  handle(command: ICommand): Observable<unknown>;
}
