import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private AS: AuthService) {
    
  }

  ngOnInit() {
    this.AS.$loginStatus.subscribe(status=>{
      if(status == -1) {
        console.log("I was here");
        this.AS.setUpAuth('#fireAuthUiDiv');
      }
    });
  }

}
