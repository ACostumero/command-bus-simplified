import {ICommand} from "@app-core/command-bus/interfaces/command.interface";
import { TDrawer } from "@app-core/interfaces/drawer-service.interface";

export class OpenDrawerCommand implements ICommand {
  payload: TDrawer<unknown>;

  constructor(drawerConfig: TDrawer<unknown>) {
    this.payload = drawerConfig;
  }
}
