import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorInterceptor} from '@app-core/interceptors/error.interceptor';
import {GlobalErrorHandler} from '@app-core/services/global-error-handler.service';

@NgModule()
export class ErrorHandlingModule {
  static forRoot(): ModuleWithProviders<ErrorHandlingModule> {
    return {
      ngModule: ErrorHandlingModule,
      providers: [
        MatSnackBar,
        {
          provide: ErrorHandler,
          useClass: GlobalErrorHandler,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true
        }
      ],
    }
  }
}
