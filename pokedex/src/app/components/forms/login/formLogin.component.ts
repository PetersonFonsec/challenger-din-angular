import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

class LoginData {
  constructor(public email?: string, public password?: string) {}
}
@Component({
  selector: 'form-login',
  templateUrl: './formLogin.component.html',
  styleUrls: ['./formLogin.component.scss'],
})
export class FormLoginComponent {
  @ViewChild('form', { static: false }) form: NgForm;
  user: LoginData = {};
  agree: Boolean;

  constructor() {}
  submit() {}
}
