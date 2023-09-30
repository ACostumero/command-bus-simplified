import { TPaletteColor } from "@app-core/types/palette-color.type";

export interface IMenu {
  title: string;
  path: string;
  icon: string;
  color?: TPaletteColor;
  submenu?: ISubmenu[];
}

export interface ISubmenu {
  title: string;
  path: string;
  visible: boolean;
}
