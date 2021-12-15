import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaDadosPageRoutingModule } from './edita-dados-routing.module';

import { EditaDadosPage } from './edita-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaDadosPageRoutingModule
  ],
  declarations: [EditaDadosPage]
})
export class EditaDadosPageModule {}
