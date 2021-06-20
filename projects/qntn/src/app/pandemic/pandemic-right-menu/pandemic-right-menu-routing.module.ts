import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PandemicRightMenuPage } from './pandemic-right-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PandemicRightMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PandemicRightMenuPageRoutingModule {}
