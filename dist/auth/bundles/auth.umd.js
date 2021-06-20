(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('firebase'), require('firebaseui'), require('rxjs'), require('@ionic/angular'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('auth', ['exports', '@angular/core', 'firebase', 'firebaseui', 'rxjs', '@ionic/angular', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.auth = {}, global.ng.core, global.firebase, global.firebaseui, global.rxjs, global.i1, global.ng.platformBrowser));
}(this, (function (exports, i0, firebase, firebaseui, rxjs, i1, platformBrowser) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);
    var firebaseui__namespace = /*#__PURE__*/_interopNamespace(firebaseui);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var GetUserProfileComponent = /** @class */ (function () {
        function GetUserProfileComponent() {
        }
        GetUserProfileComponent.prototype.ngOnInit = function () {
        };
        return GetUserProfileComponent;
    }());
    GetUserProfileComponent.ɵfac = function GetUserProfileComponent_Factory(t) { return new (t || GetUserProfileComponent)(); };
    GetUserProfileComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: GetUserProfileComponent, selectors: [["app-get-user-profile"]], decls: 1, vars: 0, template: function GetUserProfileComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "ion-app");
            }
        }, directives: [i1__namespace.IonApp], styles: [""] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(GetUserProfileComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'app-get-user-profile',
                        templateUrl: './get-user-profile.component.html',
                        styleUrls: ['./get-user-profile.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var AuthService = /** @class */ (function () {
        function AuthService(modalController) {
            this.modalController = modalController;
            this.$loginStatus = new rxjs.BehaviorSubject(0);
        }
        AuthService.prototype.init = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var fireAuth;
                var _this = this;
                return __generator(this, function (_a) {
                    this.firebaseApp = firebase__default['default'].initializeApp(config);
                    fireAuth = firebase__default['default'].auth();
                    fireAuth.onAuthStateChanged(function (user) { return __awaiter(_this, void 0, void 0, function () {
                        var modal, data;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!user) return [3 /*break*/, 6];
                                    console.log('User is logged', user);
                                    this.fireAuthUser = user;
                                    this.fireStoreDb = firebase__default['default'].firestore();
                                    if (!(user.displayName == '' || user.displayName == null)) return [3 /*break*/, 4];
                                    return [4 /*yield*/, this.modalController.create({
                                            component: GetUserProfileComponent,
                                        })];
                                case 1:
                                    modal = _a.sent();
                                    return [4 /*yield*/, modal.present()];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, modal.onWillDismiss()];
                                case 3:
                                    data = _a.sent();
                                    console.log(data);
                                    return [3 /*break*/, 5];
                                case 4:
                                    console.log(user.displayName);
                                    _a.label = 5;
                                case 5:
                                    this.$loginStatus.next(1);
                                    return [3 /*break*/, 7];
                                case 6:
                                    console.log('user not logged');
                                    this.$loginStatus.next(-1);
                                    _a.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); });
                    this.firebaseAuth = fireAuth;
                    this.fireAuthUI = new firebaseui__namespace.auth.AuthUI(fireAuth);
                    return [2 /*return*/];
                });
            });
        };
        AuthService.prototype.setUpAuth = function (div) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.fireAuthUI.start(div, {
                        signInOptions: [
                            {
                                provider: firebase__default['default'].auth.PhoneAuthProvider.PROVIDER_ID,
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
                            signInSuccessWithAuthResult: function () { return false; }
                        }
                    });
                    return [2 /*return*/];
                });
            });
        };
        AuthService.prototype.logout = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.firebaseAuth.signOut()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return AuthService;
    }());
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0__namespace.ɵɵinject(i1__namespace.ModalController)); };
    AuthService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(AuthService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1__namespace.ModalController }]; }, null);
    })();

    var AuthComponent = /** @class */ (function () {
        function AuthComponent() {
        }
        AuthComponent.prototype.ngOnInit = function () {
        };
        return AuthComponent;
    }());
    AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
    AuthComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: AuthComponent, selectors: [["auth-auth"]], decls: 2, vars: 0, template: function AuthComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, " auth works! ");
                i0__namespace.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(AuthComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'auth-auth',
                        template: "\n    <p>\n      auth works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var LoginComponent = /** @class */ (function () {
        function LoginComponent(AS) {
            this.AS = AS;
        }
        LoginComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.AS.$loginStatus.subscribe(function (status) {
                if (status == -1) {
                    console.log("I was here");
                    _this.AS.setUpAuth('#fireAuthUiDiv');
                }
            });
        };
        return LoginComponent;
    }());
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0__namespace.ɵɵdirectiveInject(AuthService)); };
    LoginComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: LoginComponent, selectors: [["auth-login"]], decls: 1, vars: 0, consts: [["id", "fireAuthUiDiv"]], template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "div", 0);
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(LoginComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'auth-login',
                        templateUrl: './login.component.html',
                        styleUrls: ['./login.component.scss']
                    }]
            }], function () { return [{ type: AuthService }]; }, null);
    })();

    var AuthModule = /** @class */ (function () {
        function AuthModule() {
        }
        return AuthModule;
    }());
    AuthModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: AuthModule });
    AuthModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
                platformBrowser.BrowserModule,
                i1.IonicModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(AuthModule, { declarations: [AuthComponent, LoginComponent, GetUserProfileComponent], imports: [platformBrowser.BrowserModule,
                i1.IonicModule], exports: [AuthComponent, LoginComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(AuthModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [AuthComponent, LoginComponent, GetUserProfileComponent],
                        imports: [
                            platformBrowser.BrowserModule,
                            i1.IonicModule,
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
                        exports: [AuthComponent, LoginComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of auth
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AuthComponent = AuthComponent;
    exports.AuthModule = AuthModule;
    exports.AuthService = AuthService;
    exports.LoginComponent = LoginComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=auth.umd.js.map
