import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundRightComponent } from './not-found-right/not-found-right.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PandemicRightMenuPage } from './pandemic/pandemic-right-menu/pandemic-right-menu.page';
import { PandemicPage } from './pandemic/pandemic.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pandemic',
  },
  {
    path: 'pandemic/:section',
    outlet: 'right',
    loadChildren: () =>
      import('./pandemic/pandemic-right-menu/pandemic-right-menu.module').then(
        (m) => m.PandemicRightMenuPageModule
      ),
  },
  {
    path: 'pandemic',
    loadChildren: () =>
      import('./pandemic/pandemic.module').then((x) => x.PandemicPageModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {path: '', outlet:'right', component: NotFoundRightComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
