import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingImageDirective } from './lazy-loading-image.directive';

@NgModule({
  declarations: [LazyLoadingImageDirective],
  imports: [CommonModule],
  exports: [LazyLoadingImageDirective],
})
export class LazyLoadingImageModule {}
