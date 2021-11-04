import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenueComponent } from './pages/menue/menue.component';
import { FoliosComponent } from './protafolio/folios/folios.component';

const routes: Routes = [
  { path: '/', component: MenueComponent },
  { path: 'menu', component: MenueComponent },
  { path: 'home', component: HomeComponent },
  { path: 'portafolio', component: FoliosComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: MenueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
