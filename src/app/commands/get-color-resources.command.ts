import {ICommand} from "@app-core/command-bus/interfaces/command.interface";

export class GetColorResourcesCommand implements ICommand {
  payload = 1;
  constructor() {

  }

}
