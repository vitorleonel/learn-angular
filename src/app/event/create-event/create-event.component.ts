import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  form: any;

  events: Array<Object> = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'name': ['', Validators.required],
      'address': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

  ngOnInit() { }

  onSubmit() {
    this.events.push({
      name: this.form.value.name,
      address: this.form.value.address,
      description: this.form.value.description,
    });

    this.form.reset()
  }
  
}
