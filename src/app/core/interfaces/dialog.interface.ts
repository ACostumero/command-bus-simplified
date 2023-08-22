import { Type } from "@angular/core";
import {TDialogableComponent} from "@app-core/types/dialogable-component.type";

export interface Dialogable<T> {
  onDialogClose(): T; // Use for close dialog and return some info
  onUpdateInfo(): void; // Use for update info inside dialog without closing it
  isCloseDisabled(): boolean; // Use for control when close button should be disabled
}

export interface IDialogAction {
  label: string;
  isDisabled?: boolean;
  checkDisabled?: boolean;
  color?: 'primary' | 'accent' | 'warn';
  isCancelButton?: boolean;
  isCloseButton?: boolean;
  callback?: keyof Dialogable<unknown>
}

// ===============================
export interface IDynamicDialogConfig<Component extends TDialogableComponent | undefined = undefined> {
  title?: string;
  detail?: string;
  actions?: IDialogAction[],
  contentComponent?: Type<Component>,
  contentComponentData?: Partial<Component>;
}
