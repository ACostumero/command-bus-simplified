import { ModuleWithProviders, NgModule } from '@angular/core';
import {CommandBus} from './command-bus';

@NgModule()
export class CommandBusModule {
  static forRoot(): ModuleWithProviders<CommandBusModule> {
    return {
      ngModule: CommandBusModule,
      providers: [CommandBus]
    };
  }
}
