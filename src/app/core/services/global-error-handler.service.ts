import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import {SnackbarService} from './snackbar.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private readonly _snackbarService: SnackbarService,
    private readonly _ngZone: NgZone
    ) {}

  public handleError(error: Error): void {
    this._ngZone.run(() => {
      console.error(error);
      this._snackbarService.showError(error.message);
    });
  }

}
