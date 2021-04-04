import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single.component';
import { SingleRoutingModule } from './single-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [SingleComponent],
  imports: [CommonModule, SingleRoutingModule, HeaderModule],
  exports: [SingleComponent],
})
export class SingleModule {}
