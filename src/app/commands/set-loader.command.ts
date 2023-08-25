import {ICommand} from "@app-core/command-bus/interfaces/command.interface";

export class SetLoaderCommand implements ICommand {
  payload: boolean;

  constructor(showLoader: boolean) {
    this.payload = showLoader;
  }
}
