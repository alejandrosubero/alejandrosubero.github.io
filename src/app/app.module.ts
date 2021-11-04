import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuerpoBaseComponent } from './core/cuerpo-base/cuerpo-base.component';
import { BarraNavegacionComponent } from './share/barra-navegacion/barra-navegacion.component';
import { FooterComponent } from './share/footer/footer.component';
import { MenueComponent } from './pages/menue/menue.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { InteresComponent } from './pages/interes/interes.component';
import { SkillComponent } from './pages/skill/skill.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IdiomaService } from './core/services/idioma.service';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImagenComponent } from './share/imagen/imagen.component';
import { CompetemciasComponent } from './pages/competemcias/competemcias.component';
import { FoliosComponent } from './protafolio/folios/folios.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CuerpoBaseComponent,
    BarraNavegacionComponent,
    FooterComponent,
    MenueComponent,
    QuiensoyComponent,
    EducacionComponent,
    InteresComponent,
    SkillComponent,
    RecomendacionesComponent,
    ExperienciaComponent,
    ImagenComponent,
    CompetemciasComponent,
    FoliosComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    IdiomaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
