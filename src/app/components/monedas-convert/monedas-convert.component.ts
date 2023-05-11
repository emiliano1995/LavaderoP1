import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-monedas-convert',
  templateUrl: './monedas-convert.component.html',
  
})
export class MonedasConvertComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
  peso: number = 1;
  valor: number = 0; 
  monedaOrigen: string = '';
  monedaDestino: string = '';
  resultado: number = 0;
  //COTIZACIONES
  dolar: number = 230;
  euro: number = 250;
  real: number = 40;

  convertir() {
    switch(this.monedaOrigen) {
      case 'peso':
        this.resultado = this.valor / this.getCotizacion(this.monedaDestino);
        break;
      case 'dolar':
        this.resultado = this.valor * this.dolar / this.getCotizacion(this.monedaDestino);
        break;
      case 'euro':
        this.resultado = this.valor * this.euro / this.getCotizacion(this.monedaDestino);
        break;
      case 'real':
        this.resultado = this.valor * this.real / this.getCotizacion(this.monedaDestino);
        break;
    }
  }

  getCotizacion(moneda: string): any {
    switch(moneda) {
      case 'peso':
        return this.peso;
      case 'dolar':
        return this.dolar;
      case 'euro':
        return this.euro;
      case 'real':
        return this.real;
    }
  }

  

}




