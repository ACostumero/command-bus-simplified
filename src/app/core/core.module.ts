import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {RenderDrawerDirective} from '@app-core/directives/render-drawer.directive';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    RenderDrawerDirective
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgOptimizedImage,
    FormsModule
  ],
  exports: [
    RenderDrawerDirective,
    TranslateModule,
    NgOptimizedImage,
    FormsModule
  ]
})
export class CoreModule { }
