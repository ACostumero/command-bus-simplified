import {Component} from '@angular/core';
import { IMenu } from '@app-core/interfaces/navigation.interface';
import { NAVIGATION_MOCK } from '@app-data/interfaces/mock/navigation.mock.const';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  public navigation: IMenu[] = NAVIGATION_MOCK;
}

