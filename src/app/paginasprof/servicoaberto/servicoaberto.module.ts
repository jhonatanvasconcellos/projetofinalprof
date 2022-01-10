import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicoabertoPageRoutingModule } from './servicoaberto-routing.module';

import { ServicoabertoPage } from './servicoaberto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicoabertoPageRoutingModule
  ],
  declarations: [ServicoabertoPage]
})
export class ServicoabertoPageModule {}
