import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaDadosPage } from './edita-dados.page';

const routes: Routes = [
  {
    path: '',
    component: EditaDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaDadosPageRoutingModule {}
