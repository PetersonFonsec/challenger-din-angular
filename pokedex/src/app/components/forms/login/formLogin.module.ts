import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent} from './formLogin.component'
import { InputTextModule } from '../../inputs/input-text/input-text.module';
import { CheckboxModule } from '../../inputs/checkbox/checkbox.module';
import { ButtonModule } from '../../button/button.module';

@NgModule({
  declarations: [FormLoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
  ],
  exports:[
    FormLoginComponent
  ]
})
export class FormLoginModule { }
