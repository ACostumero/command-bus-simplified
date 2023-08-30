import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {CommandBusModule} from '@app-core/command-bus/command-bus.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {ErrorHandlingModule} from './error-handling.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorHandlingModule.forRoot(),
    CommandBusModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
