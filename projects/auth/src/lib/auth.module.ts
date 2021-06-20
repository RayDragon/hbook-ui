import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AuthComponent } from './auth.component';
import { GetUserProfileComponent } from './get-user-profile/get-user-profile.component';
import { LoginComponent } from './login/login.component';
import { MenuEssentialsComponent } from './menu-essentials/menu-essentials.component';



@NgModule({
  declarations: [AuthComponent, LoginComponent, GetUserProfileComponent, MenuEssentialsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [AuthComponent, LoginComponent, MenuEssentialsComponent]
})
export class AuthModule { }
