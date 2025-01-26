import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contactanos',
  standalone: false,
  
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})

export class ContactanosComponent {
    from_name: string = '';
    to_name: string = '';
    message: string = '';
    phone: string = '';

    constructor() {}

    sendEmail(e: Event) {
      e.preventDefault();
      
      emailjs.sendForm('service_hnsmojp', 'template_62niulz', e.target as HTMLFormElement, 'PR-Lggy3XdyNk9daH')
        .then((result: EmailJSResponseStatus) => {
          console.log('Correo enviado:', result.text);
          this.from_name = '';
          this.to_name = '';
          this.message = '';
          this.phone = '';
        }, (error) => {
          console.error('Error al enviar el correo:', error.text);
        });

    }
}
