import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { QrComponent } from './qr.component';
import { ScanComponent } from './scan/scan.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    ScanComponent,
    ShowComponent,
    QrComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgQrScannerModule,
  ],
  exports:[
    ScanComponent,
    ShowComponent,
    QrComponent
  ]
})
export class QrModule { }
