import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
})
export class IconModule {
  private static readonly SVG_ICONS = ['github'];
  private static readonly SVG_ICONS_ROUTE = '../../assets/icons/';
  constructor(
    private readonly _iconRegistry: MatIconRegistry,
    private readonly _sanitizer: DomSanitizer) {
      IconModule.SVG_ICONS.forEach(iconName => {
        console.log('entran iconos', iconName);

        this._iconRegistry.addSvgIcon(iconName,
          this._sanitizer.bypassSecurityTrustResourceUrl(`${IconModule.SVG_ICONS_ROUTE}${iconName}.svg`));
      })
    }
}
