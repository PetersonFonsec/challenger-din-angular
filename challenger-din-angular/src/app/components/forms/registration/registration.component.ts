import { Component, EventEmitter, Output } from '@angular/core';

export class RegistrationData {
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
  @Output() submit: EventEmitter<RegistrationData> = new EventEmitter();
  user = new RegistrationData();
  agree = false;

  constructor() {}

  _submit() {
    this.submit.emit(this.user);
  }
}
