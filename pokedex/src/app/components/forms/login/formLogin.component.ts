import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IField {
  value: string,
  valid: boolean
}

@Component({
  selector: 'form-login',
  templateUrl: './formLogin.component.html',
  styleUrls: ['./formLogin.component.scss']
})
export class FormLoginComponent {
  @ViewChild('form',{static: false}) form: NgForm;
  user: any;
  privacy: IField;
  agree: Boolean;

  constructor() {
    this.user = {
      name: '',
      password: '',
      email: ''
    }
  }

  showErrors(){
    const {controls: form} = this.form.form;

    for(let field in form) {
      this[field].valid = !!(form[field].errors);
      console.log(`${field}`, !!(form[field].errors));
      console.log(form[field].errors);
    }
  }
  submit(){
    if(!this.form.form.valid) return this.showErrors();
    this.signIn();
  }
  signIn(){
    alert('signIn');
  }
}
