import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { CommonModule } from'@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  /* propiedades angular -> variables
  propiedad pública: libre acceso a su  */
  public infotarjeta:  Tarjeta[];

  constructor(){
    this.infotarjeta = [
      {
        id: 1,
        titulo:"",
        descripción:"",
        precio:50,
        img:"",
        alt:""
      }
    ]
  }
}
