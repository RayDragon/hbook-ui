import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-get-user-profile',
  templateUrl: './get-user-profile.component.html',
  styleUrls: ['./get-user-profile.component.scss']
})
export class GetUserProfileComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    
  }

}
