import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text.component';

@NgModule({
  declarations: [InputTextComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputTextComponent
  ]
})
export class InputTextModule { }
