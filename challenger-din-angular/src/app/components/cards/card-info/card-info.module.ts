import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './card-info.component';
import { ButtonModule } from '../../button/button.module';
import { LazyLoadingImageModule } from 'src/app/directives/lazy-loading-image/lazy-loading-image.module';

@NgModule({
  declarations: [CardInfoComponent],
  imports: [CommonModule, ButtonModule, LazyLoadingImageModule],
  exports: [CardInfoComponent],
})
export class CardInfoModule {}
