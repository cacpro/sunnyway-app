import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddListItemPage } from './add-list-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddListItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddListItemPageRoutingModule {}
