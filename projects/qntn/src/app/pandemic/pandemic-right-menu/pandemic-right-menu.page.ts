import { Component, OnInit } from '@angular/core';
import { RightNavService } from '../../right-nav.service';

@Component({
  selector: 'app-pandemic-right-menu',
  templateUrl: './pandemic-right-menu.page.html',
  styleUrls: ['./pandemic-right-menu.page.css'],
})
export class PandemicRightMenuPage implements OnInit {
  constructor(public rightNavService: RightNavService) {}

  ngOnInit() {
    //this.rightNavService.setDefaultRoute('');
  }
}
