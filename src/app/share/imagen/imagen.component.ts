import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'src/app/core/services/idioma.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  public iscollapse = false;
  public activeLang = 'en';
  constructor(private idioma:IdiomaService, private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit(): void {
  }

  scrollElemet($element): void { $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }); }


}
