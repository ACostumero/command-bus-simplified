import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private readonly _snackBar: MatSnackBar) { }

  public showError(message: string) {
    this._snackBar.open(message, 'Close', {duration: 5000, panelClass: 'warn-snackbar'})
  }

}
