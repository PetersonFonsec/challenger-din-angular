import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  @ViewChild('form', { static: false }) form: NgForm;
  user: any;
  agree: Boolean;

  constructor() {
    this.user = {
      name: '',
      password: '',
      email: '',
    };
  }

  submit() {}
}
