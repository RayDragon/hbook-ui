import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { BehaviorSubject } from 'rxjs';
import { GetUserProfileComponent } from './get-user-profile/get-user-profile.component';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class AuthService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aC9zcmMvbGliL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7O0FBS3hGLE1BQU0sT0FBTyxXQUFXO0lBUXRCLFlBQ1UsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRjFDLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7SUFHM0MsQ0FBQztJQUNFLElBQUksQ0FBQyxNQUFXOztZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFPLElBQUksRUFBQyxFQUFFO2dCQUN4QyxJQUFHLElBQUksRUFBRTtvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3hDLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7d0JBQ3JELElBQUksS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7NEJBQzVDLFNBQVMsRUFBRSx1QkFBdUI7eUJBQ25DLENBQUMsQ0FBQzt3QkFDSCxNQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDdEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBRW5COzt3QkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNCO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtJQUNLLFNBQVMsQ0FBQyxHQUFXOztZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLGFBQWEsRUFBRTtvQkFDYjt3QkFDRSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXO3dCQUNyRCxjQUFjLEVBQUUsSUFBSTt3QkFDcEIsbUJBQW1CLEVBQUU7NEJBQ25CLElBQUksRUFBRSxPQUFPOzRCQUNiLElBQUksRUFBRSxXQUFXOzRCQUNqQixLQUFLLEVBQUUsYUFBYSxDQUFDLGtEQUFrRDt5QkFDMUU7cUJBQ0E7aUJBQ0Y7Z0JBQ0QsdUJBQXVCO2dCQUN2QixTQUFTLEVBQUM7b0JBQ1IsMkJBQTJCLEVBQUUsR0FBRSxFQUFFLENBQUEsS0FBSztpQkFDdkM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFDSyxNQUFNOztZQUNWLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0tBQUE7O3NFQTNEVSxXQUFXO21EQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZWLE1BQU07a0RBRVAsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aSBmcm9tICdmaXJlYmFzZXVpJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2V0VXNlclByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL2dldC11c2VyLXByb2ZpbGUvZ2V0LXVzZXItcHJvZmlsZS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBmaXJlYmFzZUFwcCE6IGZpcmViYXNlLmFwcC5BcHA7XG4gIGZpcmViYXNlQXV0aCE6IGZpcmViYXNlLmF1dGguQXV0aDtcbiAgZmlyZUF1dGhVSSE6IGZpcmViYXNldWkuYXV0aC5BdXRoVUk7XG4gIGZpcmVBdXRoVXNlciE6IGZpcmViYXNlLlVzZXI7XG4gIGZpcmVTdG9yZURiITogZmlyZWJhc2UuZmlyZXN0b3JlLkZpcmVzdG9yZTtcblxuICAkbG9naW5TdGF0dXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXJcbiAgKSB7fVxuICBhc3luYyBpbml0KGNvbmZpZzogYW55KSB7XG4gICAgdGhpcy5maXJlYmFzZUFwcCA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgICBjb25zdCBmaXJlQXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbiAgICBmaXJlQXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoYXN5bmMgKHVzZXIpPT57XG4gICAgICBpZih1c2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGlzIGxvZ2dlZCcsIHVzZXIpO1xuICAgICAgICB0aGlzLmZpcmVBdXRoVXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMuZmlyZVN0b3JlRGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbiAgICAgICAgaWYodXNlci5kaXNwbGF5TmFtZSA9PSAnJyB8fCB1c2VyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICBsZXQgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICAgICAgY29tcG9uZW50OiBHZXRVc2VyUHJvZmlsZUNvbXBvbmVudCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhd2FpdCBtb2RhbC5wcmVzZW50KCk7XG4gICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmxvZyh1c2VyLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgdGhpcy4kbG9naW5TdGF0dXMubmV4dCgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIG5vdCBsb2dnZWQnKTtcbiAgICAgICAgdGhpcy4kbG9naW5TdGF0dXMubmV4dCgtMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5maXJlYmFzZUF1dGggPSBmaXJlQXV0aDtcbiAgICB0aGlzLmZpcmVBdXRoVUkgPSBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShmaXJlQXV0aCk7XG4gIH1cbiAgYXN5bmMgc2V0VXBBdXRoKGRpdjogc3RyaW5nKSB7XG4gICAgdGhpcy5maXJlQXV0aFVJLnN0YXJ0KGRpdiwge1xuICAgICAgc2lnbkluT3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZXI6IGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXG4gICAgICAgICAgZGVmYXVsdENvdW50cnk6ICdJTicsXG4gICAgICAgICAgcmVjYXB0Y2hhUGFyYW1ldGVyczoge1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJywgLy8gJ2F1ZGlvJ1xuICAgICAgICAgICAgc2l6ZTogJ2ludmlzaWJsZScsIC8vICdpbnZpc2libGUnIG9yICdjb21wYWN0J1xuICAgICAgICAgICAgYmFkZ2U6ICdib3R0b21yaWdodCcgLy8nIGJvdHRvbXJpZ2h0JyBvciAnaW5saW5lJyBhcHBsaWVzIHRvIGludmlzaWJsZS5cbiAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIC8vIHNpZ25JbkZsb3c6ICdwb3B1cCcsXG4gICAgICBjYWxsYmFja3M6e1xuICAgICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6ICgpPT5mYWxzZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFzeW5jIGxvZ291dCgpIHtcbiAgICBhd2FpdCB0aGlzLmZpcmViYXNlQXV0aC5zaWduT3V0KCk7XG4gIH1cbn1cbiJdfQ==