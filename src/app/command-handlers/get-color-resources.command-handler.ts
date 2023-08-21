import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {ICommand} from "@app-core/command-bus/interfaces/command.interface";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {Injectable} from "@angular/core";

@Injectable()
@CommandHandler('GetColorResourcesCommand')
export class GetColorResourcesCommandHandler implements ICommandHandler {
  constructor() {}

  handle(command: ICommand): void {
    // Perform the necessary actions based on the command
  }
}

