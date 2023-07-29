import { Component } from '@angular/core';
import {IAppSettings} from '@app-core/interfaces/app-settings.interface';
import {AppService} from '@app-core/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public appSettings: IAppSettings;
  constructor(private readonly _appService: AppService) {
    this.appSettings = this._appService.appSettings;
  }
}
