import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single.component';
import { SingleRoutingModule } from './single-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ContainerModule } from 'src/app/components/container/container.module';
import { TitleModule } from 'src/app/components/title/title.module';
import { DescriptionModule } from 'src/app/components/description/description.module';
import { CardInfoModule } from 'src/app/components/cards/card-info/card-info.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalSkillsModule } from 'src/app/components/modals/modal-skills/modal-skills.module';

@NgModule({
  declarations: [SingleComponent],
  imports: [
    CommonModule,
    SingleRoutingModule,
    HeaderModule,
    ContainerModule,
    TitleModule,
    DescriptionModule,
    CardInfoModule,
    MatDialogModule,
    ModalSkillsModule,
  ],
  exports: [SingleComponent],
})
export class SingleModule {}
