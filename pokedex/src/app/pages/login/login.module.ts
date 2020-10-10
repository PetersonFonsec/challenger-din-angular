import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormLoginModule } from 'src/app/components/forms/login/formLogin.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormLoginModule,
    FormsModule
  ],
})
export class LoginModule { }
