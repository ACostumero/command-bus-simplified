import {ICommand} from "@app-core/command-bus/interfaces/command.interface";
import {GetColorResourcesCommandHandler} from "./get-color-resources.command-handler";

export class GetColorResourcesCommand implements ICommand {
  payload = 1;
  constructor() {

  }

}
