import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SimpleListModule } from 'src/app/components/list/list.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CardInfoModule } from 'src/app/components/cards/card-info/card-info.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';
import { TitleModule } from 'src/app/components/title/title.module';
import { DescriptionModule } from 'src/app/components/description/description.module';
import { ContainerModule } from 'src/app/components/container/container.module';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { SearchModule } from 'src/app/components/forms/search/search.module';
@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    HeaderModule,
    FormsModule,
    ButtonModule,
    CardInfoModule,
    PaginationModule,
    TitleModule,
    DescriptionModule,
    ContainerModule,
    SimpleListModule,
    SearchModule,
  ],
})
export class ListModule {}
