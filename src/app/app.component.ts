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

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  ngOnInit(){
    
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 16;
        console.log('hola');
      },error => {

      },this.options);
    }
  }



}
