import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../auth.service";
export class LoginComponent {
    constructor(AS) {
        this.AS = AS;
    }
    ngOnInit() {
        this.AS.$loginStatus.subscribe(status => {
            if (status == -1) {
                console.log("I was here");
                this.AS.setUpAuth('#fireAuthUiDiv');
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); };
LoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["auth-login"]], decls: 1, vars: 0, consts: [["id", "fireAuthUiDiv"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{
                selector: 'auth-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aC9zcmMvbGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2F1dGgvc3JjL2xpYi9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFRbEQsTUFBTSxPQUFPLGNBQWM7SUFFekIsWUFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7SUFFbkMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFBLEVBQUU7WUFDckMsSUFBRyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUNyQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NEVBYlUsY0FBYzttREFBZCxjQUFjO1FDUjNCLHlCQUE4Qjs7a0REUWpCLGNBQWM7Y0FMMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dGgtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEFTOiBBdXRoU2VydmljZSkge1xuICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5BUy4kbG9naW5TdGF0dXMuc3Vic2NyaWJlKHN0YXR1cz0+e1xuICAgICAgaWYoc3RhdHVzID09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSSB3YXMgaGVyZVwiKTtcbiAgICAgICAgdGhpcy5BUy5zZXRVcEF1dGgoJyNmaXJlQXV0aFVpRGl2Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIiwiPGRpdiBpZD1cImZpcmVBdXRoVWlEaXZcIj48L2Rpdj4iXX0=