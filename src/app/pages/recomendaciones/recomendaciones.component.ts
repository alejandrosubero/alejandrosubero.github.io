import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

 public recoment: string = 'Pablo Copa email: pablo.copa@sdc.com.ar Teléfono celular: +54 9 249 434-9046.';

  constructor() { }

  ngOnInit(): void {
  }

}
