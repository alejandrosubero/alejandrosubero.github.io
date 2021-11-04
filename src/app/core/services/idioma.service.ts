import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  subject$ = new BehaviorSubject<string>('en');
  public activeLang = 'en';

  constructor(public translate: TranslateService,) {
    translate.setDefaultLang(this.activeLang);
   }

  public cambioIdioma(msj:string): void {
		this.subject$.next(msj);
	}


  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }


}