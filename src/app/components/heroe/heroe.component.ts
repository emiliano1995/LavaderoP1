import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../Servicios/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  
})
export class HeroeComponent {

  heroe:any = {};
  casaPath = "";
  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService          
    ) { 

    this.activatedRoute.params.subscribe( params => {
      
      this.heroe = this._heroesService.getHeroe(params['id']);
      
    } )

    if (this.heroe.casa == "SILISUR") {
      this.casaPath = "assets/img/silisur.png"
    } else {
      this.casaPath = "assets/img/meguiars.png"
    }
  }



}
