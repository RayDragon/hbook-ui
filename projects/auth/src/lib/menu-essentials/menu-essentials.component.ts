import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'auth-menu-essentials',
  templateUrl: './menu-essentials.component.html',
  styleUrls: ['./menu-essentials.component.scss']
})
export class MenuEssentialsComponent implements OnInit {

  constructor(public AS: AuthService) {
    
   }

  ngOnInit() {
  }



}
