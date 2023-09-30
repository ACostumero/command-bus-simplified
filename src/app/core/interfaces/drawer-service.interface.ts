import {Type} from '@angular/core';
import {DRAWER_WIDTH} from '@app-core/enums/drawer-width.enum';

export interface IDrawerService<T> {
  drawerData: TDrawer<T>;
  open: boolean;
}

export interface TDrawer<T> {
  type: Type<T>;
  width?: DRAWER_WIDTH | string;
  props?: Partial<T>;
}

