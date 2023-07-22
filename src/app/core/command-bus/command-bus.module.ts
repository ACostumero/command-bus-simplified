import { ModuleWithProviders, NgModule } from '@angular/core';
import {CommandBus} from './command-bus';

@NgModule()
export class CommandBusModule {
  static forRoot(): ModuleWithProviders<CommandBusModule> {
    console.log('CommandBusModule.forRoot() called'); // Troubleshooting logr
    return {
      ngModule: CommandBusModule,
      providers: [CommandBus]
    };
  }

  constructor() {}

}
