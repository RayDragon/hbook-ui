import { ModalController } from '@ionic/angular';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AuthService {
    private modalController;
    firebaseApp: firebase.app.App;
    firebaseAuth: firebase.auth.Auth;
    fireAuthUI: firebaseui.auth.AuthUI;
    fireAuthUser: firebase.User;
    fireStoreDb: firebase.firestore.Firestore;
    $loginStatus: BehaviorSubject<number>;
    constructor(modalController: ModalController);
    init(config: any): Promise<void>;
    setUpAuth(div: string): Promise<void>;
    logout(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDef<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AuthService>;
}
//# sourceMappingURL=auth.service.d.ts.map