import {Injectable} from "@angular/core";
import { OpenDrawerCommand } from "@app-commands/open-drawer.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import { DrawerService } from "@app-core/services/drawer.service";
import {Logger} from "@app-core/utils/logger.util";
import {EMPTY} from "rxjs";

@Injectable()
@CommandHandler('OpenDrawerCommand')
export class OpenDrawerCommandHandler implements ICommandHandler {
constructor(private readonly _drawerService: DrawerService) {}

  public handle(command: OpenDrawerCommand) {
    Logger.info('[OpenDrawerCommandHandler] -> handle()');
    this._drawerService.openDrawer(command.payload);
    return EMPTY;
  }
}
