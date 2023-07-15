import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorResourcesComponent} from '@app-modules/color-resources/container/color-resources.component';
import { ColorResourcesRoutingModule } from '@app-modules/color-resources/color-resources-routing.module';
import { ColorResourceComponent } from './components/color-resource/color-resource.component';

@NgModule({
  declarations: [ColorResourcesComponent, ColorResourceComponent],
  imports: [
    CommonModule,
    ColorResourcesRoutingModule
  ]
})
export class ColorResourcesModule { }
