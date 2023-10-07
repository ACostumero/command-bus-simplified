import { Type } from "@angular/core";
import {ICommand} from "@app-core/command-bus/interfaces/command.interface";
import { TDrawer } from "@app-core/interfaces/drawer-service.interface";

export class CloseDrawerCommand implements ICommand {
  payload: TDrawer<unknown>;

  constructor(type: Type<unknown>) {
    this.payload = { type };
  }
}
