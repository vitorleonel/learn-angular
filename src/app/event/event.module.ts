import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  	CreateEventComponent
  ],
  declarations: [CreateEventComponent]
})
export class EventModule { }
