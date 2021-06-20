import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PandemicPageRoutingModule } from './pandemic-routing.module';

import { PandemicPage } from './pandemic.page';
import { PandemicRightMenuPage } from './pandemic-right-menu/pandemic-right-menu.page';
import { MeetComponent } from './meet/meet.component';
import { QrModule } from 'projects/qr/src/projects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PandemicPageRoutingModule,
    QrModule
  ],
  declarations: [PandemicPage, MeetComponent]
})
export class PandemicPageModule {}
