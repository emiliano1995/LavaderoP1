import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    private heroes:Heroe[] = [
        {
          nombre: "cera",
          bio: "La cera para auto Silisur es una de las mejores en el mercado debido a su formulación especial, diseñada para proteger y realzar el brillo de la pintura de tu auto. Además, Silisur es muy fácil de aplicar y se puede usar en cualquier tipo de vehículo, desde coches deportivos hasta SUVs y camiones.",
          img: "assets/img/cera.png",
          aparicion: "U$D 54",
          casa:"SILISUR"
        },
        {
          nombre: "gomas",
          bio: "El revividor de neumáticos de Silisur es la solución perfecta para aquellos que quieren darle vida a sus neumáticos viejos y desgastados. Con ingredientes de alta calidad, facilidad de uso y durabilidad, nuestro revividor de neumáticos es una excelente inversión para mantener tus neumáticos en las mejores condiciones posibles. ¡Prueba nuestro revividor de neumáticos de Silisur hoy mismo y verás la diferencia!",
          img: "assets/img/gomas.png",
          aparicion: "U$D 65",
          casa:"SILISUR"
        },
        {
          nombre: "vidrios",
          bio: " El limpiavidrios de Silisur es la solución perfecta para aquellos que quieren tener ventanas limpias y transparentes. Con ingredientes de alta calidad, facilidad de uso y durabilidad, nuestro limpiavidrios es una excelente inversión para mantener tus ventanas en las mejores condiciones posibles. ¡Prueba nuestro limpiavidrios de Silisur hoy mismo y disfruta de una visibilidad cristalina mientras conduces!",
          img: "assets/img/limpia vidrios.png",
          aparicion: "U$D 30",
          casa: "SILISUR"
        },
        {
          nombre: "pasta para pulir",
          bio: "La pasta de pulir de Meguiar's es la solución perfecta para aquellos que quieren que la pintura de su auto luzca como nueva. Con ingredientes de alta calidad, facilidad de uso y durabilidad, nuestra pasta de pulir es una excelente inversión para mantener la pintura de tu auto en las mejores condiciones posibles. ¡Prueba nuestra pasta de pulir de Meguiar's hoy mismo y verás la diferencia!.",
          img: "assets/img/pastapulir.png",
          aparicion: "U$D 52",
          casa:"MEGUIARS"
        },
        {
          nombre: "shampoo",
          bio: "El champú para auto de Meguiar's es la solución perfecta para aquellos que quieren lavar su auto con un producto de alta calidad y seguro para la pintura. Con ingredientes de alta calidad, facilidad de uso y seguridad para cualquier tipo de acabado de auto, nuestro champú para auto es una excelente inversión para mantener tu auto en las mejores condiciones posibles. ¡Prueba nuestro champú para auto de Meguiar's hoy mismo y disfruta de una limpieza segura y efectiva",
          img: "assets/img/shampo.png",
          aparicion: "U$D 20",
          casa: "MEGUIARS"
        },
        {
          nombre: "silicona",
          bio: " la silicona para auto de Meguiar's es la solución perfecta para aquellos que quieren proteger la pintura de su auto contra los rayos UV, la suciedad y la contaminación del aire. Con ingredientes de alta calidad, facilidad de uso y durabilidad, nuestra silicona para auto es una excelente inversión para mantener la pintura de tu auto en las mejores condiciones posibles. ¡Prueba nuestra silicona para auto de Meguiar's hoy mismo y verás la diferencia",
          img: "assets/img/silicona.png",
          aparicion: "U$D 28",
          casa: "MEGUIARS"
        },
        {
          nombre: "tapizados",
          bio: "Nuestro limpia tapizados de Silisur es un producto de alta calidad diseñado para eliminar las manchas y los olores desagradables de tus tapizados de auto. Formulado con ingredientes de alta calidad, nuestro limpia tapizados es efectivo para cualquier tipo de mancha o suciedad.",
          img: "assets/img/tapizados.png",
          aparicion: "U$D 34",
          casa: "SILISUR"
        }
      ];
    
    constructor() {
        console.log("Servicio listo para usar")
    }

    getHeroes():Heroe[]{
      return this.heroes;
    }

    getHeroe(idx: number){
      return this.heroes[idx]; 
    }

    buscarHeroes(termino:string){

      let heroesArr:Heroe[] = [];
      termino = termino.toLowerCase();

      for (let i = 0; i<this.heroes.length; i ++){

        let heroe = this.heroes[i];

        let nombre = heroe.nombre.toLowerCase();

        if(nombre.indexOf(termino) >= 0){
          heroe.idx = i;
          heroesArr.push(heroe)
        }
      }

      return heroesArr;

    }

}

export interface Heroe{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa:  string;
    idx?: number;
}