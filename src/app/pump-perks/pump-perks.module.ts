import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PumpPerksPageRoutingModule } from './pump-perks-routing.module';

import { PumpPerksPage } from './pump-perks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PumpPerksPageRoutingModule
  ],
  declarations: [PumpPerksPage]
})
export class PumpPerksPageModule {}
