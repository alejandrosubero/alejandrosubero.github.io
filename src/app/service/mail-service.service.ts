import { Injectable } from '@angular/core';
import { ContactRecibeMail } from '../model/ContactRecibeMail.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private router: Router, protected http: HttpClient) { }


  postContactMe(body: ContactRecibeMail) {
    return this.http.post(environment.serverUrl + 'contact/mail', body);
    // http://localhost:1111/contact/mail 
  }


  download() {
    let respType = 'blob';
    let headers = new HttpHeaders();
    const requestOptions: Object = {
        // headers: headers,
        responseType: respType
    }
    return this.http.get( environment.serverUrl + '/cv/download', requestOptions);
}


postContactMeService(body: any) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post('https://api.emailjs.com/api/v1.0/email/send', body, {headers});
}




}
