import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService{
	  http:any;
	  member_id: number = 0;
      customer_id: number = 0;
      signup_request_id: number = 0;

  constructor(public navCtrl: NavController , http: Http){
	  this.http = http;
      console.log('AuthService Started....');
	  
  }
signin(email,password){
	console.log(email);
	console.log(password);
	let body = JSON.stringify({
		email: email='batman@batcave.com',
		password: password='batman123',
	    member_id: this.member_id, 
        customer_id: this.customer_id,
        signup_request_id: this.signup_request_id,
		
	});
	
     this.http.post('https://api.brilliantappstore.com/basaccountservice/customersignin',body)
      .map(res => res.json())
	  .subscribe ( data =>{
			  console.log(data);
			  if (data.status === 0){
				  {
		         this.navCtrl.push(DashboardPage);
                 }
			  }
		  }
	  );
  }
}


