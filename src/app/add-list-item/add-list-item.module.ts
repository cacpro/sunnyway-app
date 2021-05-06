import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddListItemPageRoutingModule } from './add-list-item-routing.module';

import { AddListItemPage } from './add-list-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddListItemPageRoutingModule
  ],
  declarations: [AddListItemPage]
})
export class AddListItemPageModule {}
