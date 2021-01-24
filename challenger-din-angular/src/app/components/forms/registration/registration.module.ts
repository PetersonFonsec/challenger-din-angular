import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';
import { InputTextModule } from '../../inputs/input-text/input-text.module';
import { CheckboxModule } from '../../inputs/checkbox/checkbox.module';
import { ButtonModule } from '../../button/button.module';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
  ],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
