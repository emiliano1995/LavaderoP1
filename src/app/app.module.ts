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
    DolarConvertComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService,
    DolarConvertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
