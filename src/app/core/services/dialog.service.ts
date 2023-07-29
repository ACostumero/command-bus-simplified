import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {IDialogData} from '@app-core/interfaces/dialog-data.interface';
import {ConfirmDialogComponent} from '@app-shared/components/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private _defaultComponent = ConfirmDialogComponent;
  constructor(private dialog: MatDialog) {}

  open(data: IDialogData): Observable<boolean> {
    return this.dialog.open(data.component || this._defaultComponent, {
        data,
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }
}
