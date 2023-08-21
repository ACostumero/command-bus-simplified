import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {CommandBusModule} from '@app-core/command-bus/command-bus.module';
import {CommandBus} from '@app-core/command-bus/command-bus';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {CommandHandlerRegistryService} from '@app-core/command-bus/services/command-handler-registry.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommandBusModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
