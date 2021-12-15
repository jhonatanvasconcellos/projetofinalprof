import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepassePage } from './repasse.page';

const routes: Routes = [
  {
    path: '',
    component: RepassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepassePageRoutingModule {}
