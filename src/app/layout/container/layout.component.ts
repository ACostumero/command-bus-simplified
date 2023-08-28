import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {DrawerService} from '@app-core/services/drawer.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit{

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private readonly _drawerService: DrawerService) {}

  ngAfterViewInit(): void {
    this._drawerService.setDrawer(this.drawer);
  }

}
