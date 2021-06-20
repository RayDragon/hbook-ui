import { Component } from '@angular/core';
import { AuthService } from 'projects/auth/src/public-api';
import {environment as env} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userLoggedStatus = 0;
  constructor(private AS: AuthService) {
    AS.init(env.firebase);
    AS.$loginStatus.subscribe(status=>this.userLoggedStatus = status);
  }
}
