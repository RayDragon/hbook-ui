import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RightNavService {
  public outlet: String = 'right';
  public activatedRoute: ActivatedRouteSnapshot | undefined;
  constructor(private aRoute: ActivatedRoute, private router: Router) {}
  getCurrentPath() {
    this.activatedRoute = this.aRoute.snapshot.children.find(x=>x.outlet == this.outlet);
    console.log(this.activatedRoute);
    if(this.activatedRoute == undefined || this.activatedRoute.routeConfig == undefined) return '';
    return this.activatedRoute.routeConfig.path;
  }
  setDefaultRoute(path: string[]) {
    if(this.getCurrentPath() == '' && path[0]!='') {
      let outletPath : {[name:string]: any} = {}
      outletPath[this.outlet as string] = path;
      this.router.navigate([
        {outlets: outletPath}
      ]);
    }
  }
  getSection() {
    if(this.getCurrentPath() == '') return '';
    return this.activatedRoute?.params.section;
  }
}
