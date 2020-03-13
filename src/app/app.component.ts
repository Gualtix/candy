import { Component, OnInit,HostListener, } from '@angular/core';
//import { google } from '@agm/core/services/google-maps-types';
//import {} from '@types/googlemaps';
//import {} from '@agm/core/services/google-maps-types'
import { GoogleMapsAPIWrapper, AgmMap,AgmCoreModule } from '@agm/core';


import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable()
export class PwaService {
  promptEvent:any;
  constructor(private swUpdate: SwUpdate) {
    /*
    swUpdate.available.subscribe(event => {
      if (askUserToUpdate()) {
        window.location.reload();
      }
    });*/
  }
}


declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Bienestar Estudiantil
//lat: 14.587224
//lng: -90.550755
//

//Facultad de Humanidades
//lat: 14.586759
//lng: -90.550799

//Escuela de Ciencias de la Comunicacion
//lat: 14.588404
//lng: -90.549001

export class AppComponent implements OnInit{

  
  promptEvent:any;

  /*
  deferredPrompt: any;
  showButton = false;


  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }


  addToHomeScreen() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }*/




















  lucky: Location;
  mkr_list:   Marker;

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  remote_info = [
    {
      ed_id: "USAC",
      nombre: "Universidad de San Carlos de Guatemala",
      lat: 14.589274, 
      lng: -90.551455,
      divisiones: []
    },
    {
      ed_id: "EBE",
      nombre: "Edificio Bienestar Estudiantil",
      lat: 14.587224,
      lng: -90.550755,
      divisiones: [
        {
          divi_id:"dbeu",
          nombre: "Division de Bienestar Estudiantil Universitario",
          ubicacion: "Edificio Bienestar Estudiantil 3r Nivel",
          telefono: "2418 8000, Ext.: 83030",
          email:"bienestaredusac@gmail.com",
          contacto:"Alejandra Sori"
        }
      ]
    },
    {
      ed_id: "ES4",
      nombre: "Facultad de Humanidades",
      lat: 14.586759,
      lng: -90.550799, 
      divisiones: [
        {
          divi_id:"psi",
          nombre: "Departameto de Psicologia",
          ubicacion: "Edificio S4 2do Nivel",
          telefono: "2443 9500",
          email:"sec.asignaciones@gmail.com",
          contacto:"Joel Moriyama"
        }
      ]
    }
  ]


  /*
  EDList: Array<Edificio> = [];
  
  EDTemp: Edificio;
  NVTemp: Nivel;
  AUTemp: AreaUtilizable;
  */

  
  initMap(){
    this.lucky = {
      latitude: 14.589274,
      longitude: -90.551458,
      mapType:"roadmap",
      markers: [],
      zoom:17,
      styles:[
        {
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]
    }
  }
  
  loadMarkers(){

    let i = 0;
    let n = this.remote_info.length;

    while(i < n){
      //console.log(this.remote_info[i]);
      let tmp = this.remote_info[i];

      var markerIcon = {
        url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
        scaledSize: new google.maps.Size(80, 80),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(32,65)
      };
  
      var markerLabel = 'GO!';

      this.lucky.markers.push(
          {
            lat:tmp.lat,
            lng:tmp.lng,
            icon: markerIcon,
            labelContent: markerLabel,
            labelAnchor: new google.maps.Point(18, 12),
            labelClass: "my-custom-class-for-label",
            labelInBackground: true
          }
        );
      i++;
    }

    console.log(this.remote_info);
  }

  constructor(public Pwa: PwaService){
    //this.loadJS();
    //this.addMaker();
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });

    
  }

  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

  

 ngOnInit(){

  this.initMap();

  this.loadMarkers();

  


  //console.log(this.EDTemp);

  //this.addMaker();

 }

 loadLocs(){
   
 }

 addMaker(){
  /*
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(position => {

      this.mkr = {
        lat: position.coords.latitude, 
        lng: position.coords.longitude
      }
      
      this.lucky.latitude = position.coords.latitude;
      this.lucky.longitude = position.coords.longitude;
      this.lucky.mapType = "roadmap";
      this.lucky.zoom = 15;

      this.lucky.markers.push(this.mkr);

    },error => {

    },this.options);
  }
  */
 }
 
}



interface Edificio{
  lat: number,
  lng: number,
  id: string,
  nombre: string,
  Pisos: Array<Nivel>
}

interface Nivel{
  nvid: number,
  Areas: Array<AreaUtilizable>
}

interface AreaUtilizable{
  auid: string,
  descripcion: string
}

interface Marker {
  lat: number;
  lng: number;
  icon: any;
  labelContent: any;
  labelAnchor: any;
  labelClass: "my-custom-class-for-label";
  labelInBackground: boolean;
}

interface Location {
  latitude: number;
  longitude: number;
  mapType: string;
  zoom: number;
  markers: Array<Marker>;
  styles: Array<any>;
}

