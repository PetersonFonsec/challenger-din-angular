import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { InputTextModule } from '../../inputs/input-text/input-text.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../../button/button.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  exports: [SearchComponent],
})
export class SearchModule {}
