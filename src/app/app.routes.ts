import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "../app/components/heroe/heroe.component";
import { BuscadorComponent} from "./components/buscador/buscador.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DolarConvertComponent } from "./components/dolar-convert/dolar-convert.component";
import { MonedasConvertComponent } from "./components/monedas-convert/monedas-convert.component";

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dolar', component: DolarConvertComponent },
    { path: 'monedas', component: MonedasConvertComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);