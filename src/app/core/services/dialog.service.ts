import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import {IDialogAction} from '@app-core/interfaces/dialog.interface';
import {DialogComponent} from '@app-shared/components/dialog/dialog.component';


@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private readonly _dialog: MatDialog) {}

  private static readonly DIALOG_DEFAULT_WIDTH = '512px';
  private readonly _defaultConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: false,
    hasBackdrop: true,
    role: 'dialog',
    width: DialogService.DIALOG_DEFAULT_WIDTH,
  };

  public static readonly DEFAULT_ACTIONS: IDialogAction[] = [
    {
      label: 'Cancel',
      color: 'primary',
      isCancelButton: true,
    },
    {
      label: 'Accept',
      color: 'accent',
      isCloseButton: true,
    },
  ];

  public open(config: MatDialogConfig): MatDialogRef<any> {
    return this._dialog.open(DialogComponent, {
      ...this._defaultConfig,
      ...config,
    });
  }

  public close(dialogRef: MatDialogRef<unknown>, dialogResult?: unknown) {
    return dialogRef.close(dialogResult);
  }
}
