import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormLoginModule } from 'src/app/components/forms/login/formLogin.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormLoginModule
  ],
})
export class LoginModule { }
