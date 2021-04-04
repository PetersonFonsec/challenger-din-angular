import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleListComponent } from './list.component';

@NgModule({
  declarations: [SimpleListComponent],
  imports: [CommonModule],
  exports: [SimpleListComponent],
})
export class SimpleListModule {}
