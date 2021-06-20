import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'projects/auth/src/public-api';
import {environment as env} from "../environments/environment";
import { RightNavService } from './right-nav.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userLoggedStatus = 0;
  constructor(public AS: AuthService, public menuController: MenuController, public rightNavService: RightNavService) {
    AS.init(env.firebase);
    AS.$loginStatus.subscribe(status=>this.userLoggedStatus = status);
  }
  async openSecondMenu() {
    this.menuController.enable(true, 'second');
    this.menuController.open('second');
    console.log("I was here", (await this.menuController.getMenus())[1].open());
  }
  ngOnInit() {
    //this.rightNavService.setDefaultRoute("");
  }
}
