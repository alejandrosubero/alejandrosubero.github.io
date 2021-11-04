import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'src/app/core/services/idioma.service';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  public iscollapse = true;
  public activeLang = 'en';
  constructor(private idioma:IdiomaService, private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit(): void {
  
  }

  scrollElemet($element): void { $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }); }

}
