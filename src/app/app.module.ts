import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HeroesService } from "./Servicios/heroes.service";
import { DolarConvertService } from "./Servicios/dolar-convert.service";

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ContactComponent } from './components/contact/contact.component';
import { DolarConvertComponent } from './components/dolar-convert/dolar-convert.component';
import { MonedasConvertComponent } from './components/monedas-convert/monedas-convert.component';
import { FormsModule } from '@angular/forms'; // <- Importa FormsModule
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    ContactComponent,
    DolarConvertComponent,
    MonedasConvertComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    AuthModule.forRoot({
      domain: 'dev-g4llofp4fbls07nw.us.auth0.com',
      clientId: 'jswybq3M4ezletgJAwEsHQUs25OJt5ef',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    FormsModule // <- Agrega FormsModule a los imports
  ],
  providers: [
    HeroesService,
    DolarConvertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
