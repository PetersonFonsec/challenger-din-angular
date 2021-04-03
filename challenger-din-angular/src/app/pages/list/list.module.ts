import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/components/inputs/input-text/input-text.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CardInfoModule } from 'src/app/components/cards/card-info/card-info.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    HeaderModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardInfoModule,
    PaginationModule,
  ],
})
export class ListModule {}
