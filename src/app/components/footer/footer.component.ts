import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
anio: number;
//anio = new Date().getFullYear(); esta forma no es buena practica
constructor(){
  this.anio = new Date().getFullYear();
}

}
