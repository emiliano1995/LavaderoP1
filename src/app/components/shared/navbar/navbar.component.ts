import { Component, Inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  user: any;

  constructor(private router:Router, public auth: AuthService, @Inject(DOCUMENT) private doc: Document ) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino:string ){
    console.log(termino);
    this.router.navigate(['/buscar',termino])
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: this.doc.location.origin } });
  }

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  guardarJsonEnLocalStorage() {

    this.auth.user$.subscribe((authResult) => {
      const user = {
        nombre: authResult?.given_name,
        apellido: authResult?.family_name,
        username: authResult?.email,
      };
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

}
