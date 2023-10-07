import {Injectable} from "@angular/core";
import { CloseDrawerCommand } from "@app-commands/close-drawer.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import { DrawerService } from "@app-core/services/drawer.service";
import {Logger} from "@app-core/utils/logger.util";
import {EMPTY} from "rxjs";

@Injectable()
@CommandHandler('CloseDrawerCommand')
export class CloseDrawerCommandHandler implements ICommandHandler {
constructor(private readonly _drawerService: DrawerService) {}

  public handle(command: CloseDrawerCommand) {
    Logger.info('[CloseDrawerCommandHandler] -> handle()');
    this._drawerService.closeDrawer(command.payload);
    return EMPTY;
  }
}
