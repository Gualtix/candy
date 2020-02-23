import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'candy';

  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number    = 14.589282;
  lng: number    = -90.551469; 
  zoom: number   = 15;

}
