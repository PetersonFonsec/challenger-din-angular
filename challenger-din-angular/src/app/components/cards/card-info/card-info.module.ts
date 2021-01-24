import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './card-info.component';
import { ButtonModule } from '../../button/button.module';

@NgModule({
  declarations: [CardInfoComponent],
  imports: [CommonModule, ButtonModule],
  exports: [CardInfoComponent],
})
export class CardInfoModule {}
