import { Component } from '@angular/core';
import {CommandBus} from '@app-core/command-bus/command-bus';
import {REPOSITORY_URL} from '@app-core/constants/env.const';
import {IAppSettings} from '@app-core/interfaces/app-settings.interface';
import {AppService} from '@app-core/services/app.service';
import {DrawerService} from '@app-core/services/drawer.service';
import {RouterService} from '@app-core/services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public appSettings: IAppSettings;
  constructor(
    private readonly _appService: AppService,
    private readonly _drawerService: DrawerService,
    private readonly _commandBus: CommandBus,
    private readonly _routerService: RouterService
    ) {
    this.appSettings = this._appService.appSettings;
  }

  public toggleDrawer() {
    this._drawerService.toggle();
  }

  public goToGitHubRepo() {
    this._routerService.goToExternalPage(REPOSITORY_URL);
  }

  public checkCommandBusAlive() {
    this._commandBus.checkSubscriptionAlive();
  }

}
