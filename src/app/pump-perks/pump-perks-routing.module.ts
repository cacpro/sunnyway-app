import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PumpPerksPage } from './pump-perks.page';

const routes: Routes = [
  {
    path: '',
    component: PumpPerksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PumpPerksPageRoutingModule {}
