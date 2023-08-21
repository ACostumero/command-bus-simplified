import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorResourcesComponent} from '@app-modules/color-resources/container/color-resources.component';
import { ColorResourcesRoutingModule } from '@app-modules/color-resources/color-resources-routing.module';
import { ColorResourceComponent } from './components/color-resource/color-resource.component';
import {CommandHandlerRegistryService} from '@app-core/command-bus/services/command-handler-registry.service';
import {ICommandHandler} from '@app-core/command-bus/interfaces/command-handler.interface';
import {GetColorResourcesCommandHandler} from '@app-command-handlers/get-color-resources.command-handler';

const COLOR_RESOURCES_COMMAND_HANDLERS: Type<ICommandHandler>[] = [GetColorResourcesCommandHandler];

@NgModule({
  declarations: [ColorResourcesComponent, ColorResourceComponent],
  imports: [
    CommonModule,
    ColorResourcesRoutingModule
  ],
  providers: [
    COLOR_RESOURCES_COMMAND_HANDLERS
  ]
})
export class ColorResourcesModule {
  constructor(private readonly commandHandlerRegistryService: CommandHandlerRegistryService) {
    this.commandHandlerRegistryService.registerHandlers(COLOR_RESOURCES_COMMAND_HANDLERS);
  }
}
