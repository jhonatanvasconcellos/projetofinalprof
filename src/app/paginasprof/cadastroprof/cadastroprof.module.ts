import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroprofPageRoutingModule } from './cadastroprof-routing.module';

import { CadastroprofPage } from './cadastroprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroprofPageRoutingModule
  ],
  declarations: [CadastroprofPage]
})
export class CadastroprofPageModule {}
