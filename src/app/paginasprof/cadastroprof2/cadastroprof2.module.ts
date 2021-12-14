import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cadastroprof2PageRoutingModule } from './cadastroprof2-routing.module';

import { Cadastroprof2Page } from './cadastroprof2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cadastroprof2PageRoutingModule
  ],
  declarations: [Cadastroprof2Page]
})
export class Cadastroprof2PageModule {}
