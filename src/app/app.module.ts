import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {CommandHandlerModule} from '@app-core/command-bus/modules/command-handler.module';
import {CommandBusModule} from '@app-core/command-bus/command-bus.module';
import {CommandBus} from '@app-core/command-bus/command-bus';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommandHandlerModule.forRoot(),
    CommandBusModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CommandBus],
  bootstrap: [AppComponent]
})
export class AppModule {}
