import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
ionViewWillEnter() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.transform = 'translateY(86px)';
        });
    } // end if
}

   ngOnInit() {
    let alert = this.alertCtrl.create({
      title: 'Ooops!',
      subTitle: 'No cards have been found with matching Email,Mobile or Customer ID !',
      buttons: ['OK']
    });
    alert.present();
  }

}
