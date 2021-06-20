import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'projects/auth/src/public-api';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundRightComponent } from './not-found-right/not-found-right.component';
import { NgQrScannerModule } from 'angular2-qrscanner';

@NgModule({
  declarations: [		
    AppComponent,
      NotFoundComponent,
      NotFoundRightComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    AuthModule,
    NgQrScannerModule
  ],
  // providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
