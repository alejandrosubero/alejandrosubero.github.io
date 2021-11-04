import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'src/app/core/services/idioma.service';

@Component({
  selector: 'app-folios',
  templateUrl: './folios.component.html',
  styleUrls: ['./folios.component.css']
})
export class FoliosComponent implements OnInit {

  public activeLang = 'en';
  
  constructor(private idioma: IdiomaService,
    private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
  }

}
