import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import {SetLoaderCommandHandler} from '@app-command-handlers/set-loader.command-handler';
import {ICommandHandler} from '@app-core/command-bus/interfaces/command-handler.interface';
import {CommandHandlerRegistryService} from '@app-core/command-bus/services/command-handler-registry.service';

const COMPONENTS = [DialogComponent]
const SHARED_COMMAND_HANDLERS: Type<ICommandHandler>[] = [
  SetLoaderCommandHandler
];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    SHARED_COMMAND_HANDLERS
  ],
  exports: [MaterialModule, ...COMPONENTS]
})
export class SharedModule {
  constructor(private readonly commandHandlerRegistryService: CommandHandlerRegistryService) {
    this.commandHandlerRegistryService.registerHandlers(SHARED_COMMAND_HANDLERS);
  }
}
