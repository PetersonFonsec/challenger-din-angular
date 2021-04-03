import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLazyLoadingImage]',
})
export class LazyLoadingImageDirective {
  @HostBinding('class.image-transition') private imageTransition = true;
  @HostBinding('class.image-loading') private imageLoading = true;
  constructor() {}

  @HostListener('load') imageLoaded() {
    this.imageLoading = false;
  }
}
