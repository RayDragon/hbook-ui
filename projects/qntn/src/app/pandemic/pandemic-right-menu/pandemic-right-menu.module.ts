import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PandemicRightMenuPageRoutingModule } from './pandemic-right-menu-routing.module';

import { PandemicRightMenuPage } from './pandemic-right-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PandemicRightMenuPageRoutingModule
  ],
  declarations: [PandemicRightMenuPage]
})
export class PandemicRightMenuPageModule {}
