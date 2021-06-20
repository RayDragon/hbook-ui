import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AuthComponent } from './auth.component';
import { GetUserProfileComponent } from './get-user-profile/get-user-profile.component';
import { LoginComponent } from './login/login.component';
import * as i0 from "@angular/core";
export class AuthModule {
}
AuthModule.ɵmod = i0.ɵɵdefineNgModule({ type: AuthModule });
AuthModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            BrowserModule,
            IonicModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthModule, { declarations: [AuthComponent, LoginComponent, GetUserProfileComponent], imports: [BrowserModule,
        IonicModule], exports: [AuthComponent, LoginComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthModule, [{
        type: NgModule,
        args: [{
                declarations: [AuthComponent, LoginComponent, GetUserProfileComponent],
                imports: [
                    BrowserModule,
                    IonicModule,
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [AuthComponent, LoginComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hdXRoL3NyYy9saWIvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBYXpELE1BQU0sT0FBTyxVQUFVOzs4Q0FBVixVQUFVO21HQUFWLFVBQVUsa0JBUFo7WUFDUCxhQUFhO1lBQ2IsV0FBVztTQUNaO3dGQUlVLFVBQVUsbUJBUk4sYUFBYSxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsYUFFbkUsYUFBYTtRQUNiLFdBQVcsYUFHSCxhQUFhLEVBQUUsY0FBYztrREFFNUIsVUFBVTtjQVR0QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsQ0FBQztnQkFDdEUsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsV0FBVztpQkFDWjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2F1dGguY29tcG9uZW50JztcbmltcG9ydCB7IEdldFVzZXJQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9nZXQtdXNlci1wcm9maWxlL2dldC11c2VyLXByb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQXV0aENvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIEdldFVzZXJQcm9maWxlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gIF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbiAgZXhwb3J0czogW0F1dGhDb21wb25lbnQsIExvZ2luQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHsgfVxuIl19