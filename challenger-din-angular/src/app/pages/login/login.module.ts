import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormLoginModule } from 'src/app/components/forms/login/formLogin.module';
import { FormsModule } from '@angular/forms';
import { RegistrationModule } from 'src/app/components/forms/registration/registration.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { LoginRoutingModule } from './login-routing.module';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormLoginModule,
    RegistrationModule,
    FormsModule,
    ButtonModule,
    LoginRoutingModule,
  ],
})
export class LoginModule {}
