import { Component, OnInit, ViewChild } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
  selector: 'qr-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  availableCameras: {device: MediaDeviceInfo, label: string}[] = [];

  @ViewChild(QrScannerComponent) qnScannerComponent!: QrScannerComponent;
  constructor() { }

  ngOnInit() {}
  initCameras() {
    if(this.qnScannerComponent == undefined) {
       setTimeout(()=>this.ngOnInit(), 1000);
       return;
    }
  
    // let chosenDevice: any = null;
    this.qnScannerComponent.getMediaDevices()
      .then(devices=>{
        console.log(devices);
        // const videoDevices: MediaDeviceInfo[] = [];
        for(const device of devices) {
          if(device.kind.toString() === 'videoinput') {
            this.availableCameras.push({device, label: device.label})
          }
        }
        this.startScan(this.availableCameras[0].device);
      });
      this.qnScannerComponent.capturedQr.subscribe((result:any)=>{
        // console.log(result);
        // this.qnScannerComponent.chooseCamera.next(chosenDevice);
        this.onQrResult(result);
      });
  }
  startScan(device: any) {
    this.qnScannerComponent.chooseCamera.next(device);
  }
  onQrResult(result: any) {
  }

}
