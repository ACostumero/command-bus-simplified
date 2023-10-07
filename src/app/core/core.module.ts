import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {RenderDrawerDirective} from '@app-core/directives/render-drawer.directive';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    RenderDrawerDirective
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RenderDrawerDirective,
    TranslateModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
