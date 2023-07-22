import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {CommandHandlerModule} from '@app-core/command-bus/modules/command-handler.module';
import {CommandBusModule} from '@app-core/command-bus/command-bus.module';
import {CommandBus} from '@app-core/command-bus/command-bus';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommandHandlerModule.forRoot(),
    CommandBusModule.forRoot(),
  ],
  providers: [CommandBus],
  bootstrap: [AppComponent]
})
export class AppModule {}
