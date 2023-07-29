import {Component, Type} from "@angular/core";

export interface IDialogData {
  title: string;
  message: string;
  component: Type<Component>
}
