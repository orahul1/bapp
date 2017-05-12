import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../app/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { SignupPage } from '../../pages/signup/signup';
import { LoadingController } from 'ionic-angular';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[AuthService],
})
export class HomePage {
  email:string;
  password:string;

  constructor(public navCtrl: NavController, private authService:AuthService,public loadingCtrl: LoadingController) {
} 
  ionViewWillEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.transform = 'translateY(56px)';
      });
    }
  }

  ionViewDidLeave() {
    let tabs = document.querySelectorAll('.tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.transform = 'translateY(0)';
      });
    }
  }
  pushpage(){
    this.navCtrl.push(SignupPage);
  }
  signin(){
    this.authService.signin(this.email,this.password);
    this.presentLoading();
  }
  
    presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
}
  }
