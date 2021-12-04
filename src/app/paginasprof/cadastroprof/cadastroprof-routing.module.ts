import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroprofPage } from './cadastroprof.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroprofPageRoutingModule {}
