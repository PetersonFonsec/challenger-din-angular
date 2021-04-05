import { Component, EventEmitter, Output } from '@angular/core';

export class LoginData {
  constructor(public email?: string, public password?: string) {}
}
@Component({
  selector: 'form-login',
  templateUrl: './formLogin.component.html',
  styleUrls: ['./formLogin.component.scss'],
})
export class FormLoginComponent {
  @Output() submit: EventEmitter<LoginData> = new EventEmitter();
  user = new LoginData();
  agree = false;

  constructor() {}

  _submit() {
    this.submit.emit(this.user);
  }
}
