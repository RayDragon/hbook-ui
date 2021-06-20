import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { RightNavService } from '../right-nav.service';

@Component({
  selector: 'app-pandemic',
  templateUrl: './pandemic.page.html',
  styleUrls: ['./pandemic.page.css'],
})
export class PandemicPage implements OnInit {
  pathsSlides = {
    home: 1,
    
  };
  constructor(public rightNavService: RightNavService) {}

  ngOnInit() {
    this.rightNavService.setDefaultRoute(['pandemic','something']);
    // Go to the current page :
    let path = this.rightNavService.getSection();
    console.log(path);
  }
  @ViewChild(IonSlides) slides!: IonSlides;
  activeSlide = 0;
  async slideChanged($event: any) {
    if(this.slides == undefined) {
      setTimeout(()=>this.slideChanged($event), 1000);
      return;
    }
    this.activeSlide = await this.slides.getActiveIndex();
  }


}

