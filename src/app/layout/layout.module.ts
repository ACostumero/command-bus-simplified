import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app-layout/components/header/header.component';
import { NavBarComponent } from '@app-layout/components/nav-bar/nav-bar.component';
import { FooterComponent } from '@app-layout/components/footer/footer.component';
import {SharedModule} from '@app-shared/shared.module';
import { LayoutComponent } from '@app-layout/container/layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import { DrawerComponent } from './components/drawer/drawer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    DrawerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule
  ],
  exports: [SharedModule]
})
export class LayoutModule {
}
