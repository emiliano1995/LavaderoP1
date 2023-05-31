import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-monedas-convert',
  templateUrl: './monedas-convert.component.html',
  
})
export class MonedasConvertComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  //Calculador IMC
  weight: number = 0;
  height: number = 0;
  imc: number = 0;
  imcInterpretation: string = "";

  //Conversor Monedas
  peso: number = 1;
  valor: number = 0; 
  monedaOrigen: string = '';
  monedaDestino: string = '';
  resultado: number = 0;
  //COTIZACIONES
  dolar: number = 248.50;
  euro: number = 267;
  real: number = 51.45;

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

  calculateIMC() {
    const heightInMeters = parseInt((<HTMLInputElement>document.getElementById('height')).value) / 100;
    this.imc = parseInt((<HTMLInputElement>document.getElementById('weight')).value) / (heightInMeters * heightInMeters);
    this.imcInterpretation = this.getInterpretation(this.imc);
  }

  private getInterpretation(imc: number): string {
    if (imc < 18.5) {
      return 'Bajo peso';
    } else if (imc < 25) {
      return 'Peso normal';
    } else if (imc < 30) {
      return 'Sobrepeso';
    } else {
      return 'Obesidad';
    }
  }

  

}




