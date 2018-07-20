import { Component } from '@angular/core';
import { ModalController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = TabsPage;

  constructor(
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private angularFireAuth: AngularFireAuth, private modalCtrl: ModalController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.angularFireAuth.authState.subscribe( ( user ) => {
        // ログインしていない
        if ( !user ) {
          let contactModal = this.modalCtrl.create( 'LoginPage' );
          contactModal.present();
        }
      });
    });
  }
}
