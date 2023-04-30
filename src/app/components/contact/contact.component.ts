import { Component, OnInit } from '@angular/core';
// import { MailService } from "../../Servicios/sendEmail.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  
})
export class ContactComponent implements OnInit {
  formData: any = {};
  constructor() { }

  
  ngOnInit(): void {
  }

  // sendMail(){
  //   this.mailService.sendMail(this.formData.name, this.formData.email, this.formData.asunto, this.formData.mensaje).subscribe(
  //     (response) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  

}

let nombre: string;
let telefono: string;
let mail: string;
let comentario: string;

