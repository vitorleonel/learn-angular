import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  form: any;

  events: any = [];

  loading: boolean = true;

  constructor(private formBuilder: FormBuilder, private angularFire: AngularFireDatabase) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'name': ['', Validators.required],
      'address': ['', Validators.required],
      'description': ['', Validators.required]
    });

    this.events = this.angularFire.list('events');
    this.events.subscribe(() => this.loading = false);
  }

  onSubmit() {
    this.angularFire.list('events').push({
      name: this.form.value.name,
      address: this.form.value.address,
      description: this.form.value.description,
    });

    this.form.reset()
  }
  
}
