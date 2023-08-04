import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material.module';
import { DialogComponent } from './components/dialog/dialog.component';

const COMPONENTS = [DialogComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MaterialModule, ...COMPONENTS]
})
export class SharedModule { }
