import { Component, OnInit } from '@angular/core';
import { DolarConvertService } from "../../Servicios/dolar-convert.service";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dolar-convert',
  templateUrl: './dolar-convert.component.html',
  
})
export class DolarConvertComponent implements OnInit {

  //Conversor Divisas
  divisas:any;
  valorUsd: number = 0;
  resultadoUsd: number = 0;
  valorArs: number = 0;
  resultadoArs: number = 0;
  usdCompra:number = 0;
  usdVenta:number = 0;
  valorBtcArs: number = 0;
  resultadoBtcArs:number = 0;
  btc:number = 0;
  selectedOption: number = 0;
  currency:number = 0;
  resultado:number = 0;
  valor:number = 0;

  
  //Calculador IMC
  weight: number = 0;
  height: number = 0;
  imc: number = 0;
  imcInterpretation: string = "";

  constructor(public _dolarConvertService: DolarConvertService) { }

  async ngOnInit() {
    console.log('datos listos')
    this.divisas = await this._dolarConvertService.getDolarApi();
    const valorAED = this.divisas.data.ARS.value;
    console.log('El valor de ARS es: ' + valorAED);
  }

  obtenerValorUsd() {
    this.valorUsd = parseFloat((<HTMLInputElement>document.getElementById('inputValorUsd')).value)
    console.log(typeof this.valorUsd);
    console.log('El valorUsd ingresado es: ' + this.valorUsd);
    console.log()
    this.resultadoUsd = parseFloat(this.divisas.data.ARS.value) * this.valorUsd;
    console.log('La conversión de USD a ARS es: ' + this.resultadoUsd);
    this.usdVenta = parseFloat(this.divisas.data.ARS.value);
  }

  

  obtenerValorArs() {
    this.valorArs = parseFloat((<HTMLInputElement>document.getElementById('inputValorArs')).value)
    console.log(typeof this.valorArs);
    console.log('El valorArs ingresado es: ' + this.valorArs);
    this.resultadoArs = this.valorArs / parseFloat(this.divisas.data.ARS.value);
    console.log('La conversión de ARS a USD(oficial) es: ' + this.resultadoArs);
    this.usdCompra = parseFloat(this.divisas.data.ARS.value);
  }

  obtenerValorBtcUsd() {
    this.valorBtcArs = parseFloat((<HTMLInputElement>document.getElementById('inputValorBtcArs')).value)
    console.log(typeof this.valorBtcArs);
    console.log('El valorArs ingresado es: ' + this.valorBtcArs);
    this.resultadoBtcArs = this.valorBtcArs / parseFloat(this.divisas.data.BTC.value) * parseFloat(this.divisas.data.ARS.value);
    console.log('La conversión de ARS a USD(Blue Comp) es: ' + this.valorBtcArs);
    this.btc = parseFloat(this.divisas.data.BTC.value);
  }

  calculateIMC() {
    const heightInMeters = parseInt((<HTMLInputElement>document.getElementById('height')).value) / 100;
    this.imc = parseInt((<HTMLInputElement>document.getElementById('weight')).value) / (heightInMeters * heightInMeters);
    this.imcInterpretation = this.getInterpretation(this.imc);
  }


  obtenerValor(currency:number) {
    this.currency = parseInt((<HTMLInputElement>document.getElementById('selectOptions')).value)
    this.valor = parseFloat((<HTMLInputElement>document.getElementById('inputValor')).value)
    console.log(typeof this.valor);
    console.log('El valor ingresado es: ' + this.valor);
    console.log('la moneda elegida es '+this.currency);
    this.resultado = this.valor * parseFloat(this.divisas[this.currency].casa.compra);
    console.log('La conversión es: ' + this.valor);
    this.btc = parseFloat(this.divisas[this.currency].casa.compra);
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
