import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventModule } from './event/event.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
