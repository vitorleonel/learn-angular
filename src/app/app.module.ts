import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventModule } from './event/event.module';

import { AppComponent } from './app.component';

import { FirebaseConfig } from './../environments/firebase.configs';
import { AngularFireModule } from 'angularfire2/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EventModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
