import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavingsDetailPage } from './savings-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SavingsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavingsDetailPageRoutingModule {}
