import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSkillsComponent } from './modal-skills.component';
import { ButtonModule } from '../../button/button.module';
import { TitleModule } from '../../title/title.module';

@NgModule({
  declarations: [ModalSkillsComponent],
  imports: [CommonModule, ButtonModule, TitleModule],
  exports: [ModalSkillsComponent],
})
export class ModalSkillsModule {}
