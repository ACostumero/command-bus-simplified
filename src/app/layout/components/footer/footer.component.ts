import { Component } from '@angular/core';
import {IAppSettings} from '@app-core/interfaces/app-settings.interface';
import {AppService} from '@app-core/services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public appSettings: IAppSettings;
  constructor(private readonly _appService: AppService) {
    this.appSettings = this._appService.appSettings;
  }
}
