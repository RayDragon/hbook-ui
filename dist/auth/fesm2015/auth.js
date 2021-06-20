import { __awaiter } from 'tslib';
import * as i0 from '@angular/core';
import { Component, Injectable, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { BehaviorSubject } from 'rxjs';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

class GetUserProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
GetUserProfileComponent.ɵfac = function GetUserProfileComponent_Factory(t) { return new (t || GetUserProfileComponent)(); };
GetUserProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GetUserProfileComponent, selectors: [["app-get-user-profile"]], decls: 1, vars: 0, template: function GetUserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "ion-app");
    } }, directives: [i1.IonApp], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GetUserProfileComponent, [{
        type: Component,
        args: [{
                selector: 'app-get-user-profile',
                templateUrl: './get-user-profile.component.html',
                styleUrls: ['./get-user-profile.component.scss']
            }]
    }], function () { return []; }, null); })();

class AuthService {
    constructor(modalController) {
        this.modalController = modalController;
        this.$loginStatus = new BehaviorSubject(0);
    }
    init(config) {
        return __awaiter(this, void 0, void 0, function* () {
            this.firebaseApp = firebase.initializeApp(config);
            const fireAuth = firebase.auth();
            fireAuth.onAuthStateChanged((user) => __awaiter(this, void 0, void 0, function* () {
                if (user) {
                    console.log('User is logged', user);
                    this.fireAuthUser = user;
                    this.fireStoreDb = firebase.firestore();
                    if (user.displayName == '' || user.displayName == null) {
                        let modal = yield this.modalController.create({
                            component: GetUserProfileComponent,
                        });
                        yield modal.present();
                        let data = yield modal.onWillDismiss();
                        console.log(data);
                    }
                    else
                        console.log(user.displayName);
                    this.$loginStatus.next(1);
                }
                else {
                    console.log('user not logged');
                    this.$loginStatus.next(-1);
                }
            }));
            this.firebaseAuth = fireAuth;
            this.fireAuthUI = new firebaseui.auth.AuthUI(fireAuth);
        });
    }
    setUpAuth(div) {
        return __awaiter(this, void 0, void 0, function* () {
            this.fireAuthUI.start(div, {
                signInOptions: [
                    {
                        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                        defaultCountry: 'IN',
                        recaptchaParameters: {
                            type: 'image',
                            size: 'invisible',
                            badge: 'bottomright' //' bottomright' or 'inline' applies to invisible.
                        },
                    }
                ],
                // signInFlow: 'popup',
                callbacks: {
                    signInSuccessWithAuthResult: () => false
                }
            });
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.firebaseAuth.signOut();
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.ModalController)); };
AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.ModalController }]; }, null); })();

class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AuthComponent, selectors: [["auth-auth"]], decls: 2, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " auth works! ");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthComponent, [{
        type: Component,
        args: [{
                selector: 'auth-auth',
                template: `
    <p>
      auth works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class LoginComponent {
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
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(AuthService)); };
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
    }], function () { return [{ type: AuthService }]; }, null); })();

class AuthModule {
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

/*
 * Public API Surface of auth
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthComponent, AuthModule, AuthService, LoginComponent };
//# sourceMappingURL=auth.js.map
