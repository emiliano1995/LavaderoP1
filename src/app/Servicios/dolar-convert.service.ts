import { Injectable } from '@angular/core';
import  axios  from "axios";

@Injectable({
  providedIn: 'root'
})
export class DolarConvertService {

  constructor() {
    console.log('LEvantando servico de conversion dolar');

  }

  async getDolarApi() {
    try {
      const resolve = await axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
      const data = resolve.data;
      return data;
    } catch (error) {
      return error;
    }
    
  }



}
