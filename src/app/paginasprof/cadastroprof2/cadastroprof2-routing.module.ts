import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cadastroprof2Page } from './cadastroprof2.page';

const routes: Routes = [
  {
    path: '',
    component: Cadastroprof2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cadastroprof2PageRoutingModule {}
