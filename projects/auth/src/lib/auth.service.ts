import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { BehaviorSubject } from 'rxjs';
import { GetUserProfileComponent } from './get-user-profile/get-user-profile.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseApp!: firebase.app.App;
  firebaseAuth!: firebase.auth.Auth;
  fireAuthUI!: firebaseui.auth.AuthUI;
  fireAuthUser!: firebase.User;
  fireStoreDb!: firebase.firestore.Firestore;

  $loginStatus = new BehaviorSubject<number>(0);
  constructor(
    private modalController: ModalController
  ) {}
  async init(config: any) {
    this.firebaseApp = firebase.initializeApp(config);
    const fireAuth = firebase.auth();
    fireAuth.onAuthStateChanged(async (user)=>{
      if(user) {
        console.log('User is logged', user);
        this.fireAuthUser = user;
        this.fireStoreDb = firebase.firestore();
        if(user.displayName == '' || user.displayName == null) {
          let modal = await this.modalController.create({
            component: GetUserProfileComponent,
            backdropDismiss: false,
            swipeToClose: false
          });
          await modal.present();
          let data = await modal.onWillDismiss();
          await user.updateProfile({displayName: data.data.name});
        } else console.log("Welcome: ", user.displayName);
        this.$loginStatus.next(1);
      } else {
        console.log('user not logged');
        this.$loginStatus.next(-1);
      }
    });
    
    this.firebaseAuth = fireAuth;
    this.fireAuthUI = new firebaseui.auth.AuthUI(fireAuth);
  }
  async setUpAuth(div: string) {
    this.fireAuthUI.start(div, {
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: 'IN',
          recaptchaParameters: {
            type: 'image', // 'audio'
            size: 'invisible', // 'invisible' or 'compact'
            badge: 'bottomright' //' bottomright' or 'inline' applies to invisible.
        },
        }
      ],
      // signInFlow: 'popup',
      callbacks:{
        signInSuccessWithAuthResult: ()=>false
      }
    });
  }
  async logout() {
    await this.firebaseAuth.signOut();
  }
}
