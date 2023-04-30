import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(nombre: string, email: string, asunto: string, mensaje: string){
    const url = 'https://yourmailserver.com/sendmail';
    const body = {
      nombre: nombre,
      email: email,
      asunto: asunto,
      mensaje: mensaje
    };

    return this.http.post(url, body);
  }

}