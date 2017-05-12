import { Component } from '@angular/core';

import { SignupPage } from '../signup/signup';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SignupPage;
  tab3Root = ContactPage;


  constructor() {

  }
}
