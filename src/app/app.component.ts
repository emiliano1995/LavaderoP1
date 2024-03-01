import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tp2_2023';
  booleanVariable: boolean = false;


  isLogin = false
  localStorage: any;
  user: any;
  json: any;
  constructor(public auth: AuthService){
    
    this.booleanVariable = false;
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if(isAuthenticated){
        //this.isLogin = true
        //auth.logout()
      }
    })


  }

  ngOnInit() {
    this.auth.logout
  }

  login(){
    this.auth.loginWithRedirect()
  }
}
