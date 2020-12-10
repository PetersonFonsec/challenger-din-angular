import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

class RegistrationData {
  constructor(
    public name?: string,
    public email?: string,
    public password?: string
  ) {}
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  @ViewChild('form', { static: false }) form: NgForm;
  user: RegistrationData = new RegistrationData();
  agree: Boolean;

  constructor() {}

  submit() {}
}
