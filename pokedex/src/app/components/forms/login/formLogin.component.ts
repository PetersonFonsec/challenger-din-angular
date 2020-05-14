import { Component } from '@angular/core';

@Component({
  selector: 'form-login',
  templateUrl: './formLogin.component.html',
  styleUrls: ['./formLogin.component.scss']
})
export class FormLoginComponent {
  constructor() { }
  submit(){
    console.log('submit');
    alert('submit');
  }
  signIn(){
    console.log('signIn');
    alert('signIn');
  }
}
