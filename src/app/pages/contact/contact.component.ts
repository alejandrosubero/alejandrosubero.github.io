import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'src/app/core/services/idioma.service';
import { ContactRecibeMail } from 'src/app/model/ContactRecibeMail.model';
import { MailServiceService } from 'src/app/service/mail-service.service';


export function emailValidator(control: AbstractControl) {
  var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  if (!EMAIL_REGEXP.test(control.value)) {
    return { invalidEmail: true };
  }
  return null;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacME: ContactRecibeMail = new ContactRecibeMail();
  public activeLang = 'en';

  profileForm = this.fb.group({
    email: ['', [
      Validators.required,
      emailValidator]
    ],
    nombre: ['', Validators.required],
    comentarios: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private service: MailServiceService,
    private idioma: IdiomaService,
    private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
  }




  onSend2() {

    if (this.profileForm.valid) {
      this.contacME.email = this.profileForm.value.email;
      this.contacME.name = this.profileForm.value.nombre;
      this.contacME.feedback = this.profileForm.value.comentarios;
      this.contacME.asunto = 'Contacto desde Profile Web';

      this.service.postContactMe(this.contacME).subscribe(x => {
        console.log('respuesta: ', x);
        this.resetForm();
      }, error => {
        console.log('Error Ocurre: ', error);
        alert('The Message Cannot be Send Try again in a few minutes.');
      });
    } else {
      alert('To send a contact all the fields must be with values');
    }
  }


  resetForm() {
    this.profileForm.get('email').setValue('');
    this.profileForm.get('nombre').setValue('');
    this.profileForm.get('comentarios').setValue('');
    alert('You menssage was send');
  }


  close() {
    this.profileForm.get('email').setValue('');
    this.profileForm.get('nombre').setValue('');
    this.profileForm.get('comentarios').setValue('');
  }



  onSend() {

    let data = {
      service_id: 'service_3qwnjc4',
      template_id: 'template_63yehu5',
      user_id: 'user_SNgfydAIsgFqXVud9bKw1',
      template_params: {
        to_name: 'alejandrosubero.ar@gmail.com',
        from_name: this.profileForm.value.nombre,
        message: `Mensaje: ${this.profileForm.value.comentarios}.`,
        correo: `Correo de contacto: ${this.profileForm.value.email}`
      }
    };

    this.service.postContactMeService(data).subscribe(x => {
     // console.log('respuesta: ', x);
      this.resetForm();
    }, error => {
      this.resetForm();
     // console.log('Error Ocurre: ', error);
      alert('The Message be Send in a few minutes for service Thansk...');
    });

  }







}


// <input [class.is-invalid] = "userEmails.get('primaryEmail').invalid && userEmails.get('primaryEmail').touched"
// 	type="email" class="form-control" formControlName="primaryEmail" />

