import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepassePageRoutingModule } from './repasse-routing.module';

import { RepassePage } from './repasse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepassePageRoutingModule
  ],
  declarations: [RepassePage]
})
export class RepassePageModule {}
