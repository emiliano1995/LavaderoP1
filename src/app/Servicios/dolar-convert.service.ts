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
      const resolve : any = await axios.get('https://api.currencyapi.com/v3/latest?apikey=cur_live_vyzf8nqMsynC6NNXnQCayQfnQkQSQYgGu5QjHZq8&currencies=');
      const data = resolve.data;
      return data;
    } catch (error) {
      return error;
    }
    
  }



}
