import { Component, OnInit } from '@angular/core';
import { DolarConvertService } from "../../Servicios/dolar-convert.service";

@Component({
  selector: 'app-dolar-convert',
  templateUrl: './dolar-convert.component.html',
  
})
export class DolarConvertComponent implements OnInit {

  //Conversor Divisas
  divisas:any[] = [];
  valorUsd: number = 0;
  resultadoUsd: number = 0;
  valorArs: number = 0;
  resultadoArs: number = 0;
  usdCompra:number = 0;
  usdVenta:number = 0;

  //Calculador IMC
  weight: number = 0;
  height: number = 0;
  imc: number = 0;
  imcInterpretation: string = "";

  constructor(private _dolarConvertService: DolarConvertService) { }

  async ngOnInit() {
    console.log('datos listos')
    this.divisas = await this._dolarConvertService.getDolarApi();
    console.log(this.divisas);
  }

  obtenerValorUsd() {
    this.valorUsd = parseFloat((<HTMLInputElement>document.getElementById('inputValorUsd')).value)
    console.log(typeof this.valorUsd);
    console.log('El valorUsd ingresado es: ' + this.valorUsd);
    this.resultadoUsd = parseFloat(this.divisas[1].casa.venta) * this.valorUsd;
    console.log('La conversión de USD a ARS es: ' + this.resultadoUsd);
    this.usdVenta = parseFloat(this.divisas[1].casa.venta);
  }

  obtenerValorArs() {
    this.valorArs = parseFloat((<HTMLInputElement>document.getElementById('inputValorArs')).value)
    console.log(typeof this.valorArs);
    console.log('El valorArs ingresado es: ' + this.valorArs);
    this.resultadoArs = this.valorArs / parseFloat(this.divisas[1].casa.compra);
    console.log('La conversión de ARS a USD(Blue Comp) es: ' + this.resultadoArs);
    this.usdCompra = parseFloat(this.divisas[1].casa.compra);
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
