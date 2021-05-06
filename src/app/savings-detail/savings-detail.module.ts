import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavingsDetailPageRoutingModule } from './savings-detail-routing.module';

import { SavingsDetailPage } from './savings-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavingsDetailPageRoutingModule
  ],
  declarations: [SavingsDetailPage]
})
export class SavingsDetailPageModule {}
