import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent} from './formLogin.component'

@NgModule({
  declarations: [FormLoginComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FormLoginComponent
  ]
})
export class FormLoginModule { }
