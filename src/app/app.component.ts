import { Component, OnInit, } from '@angular/core';
//import { google } from '@agm/core/services/google-maps-types';
//import {} from '@types/googlemaps';
//import {} from '@agm/core/services/google-maps-types'
import { GoogleMapsAPIWrapper, AgmMap,AgmCoreModule } from '@agm/core';

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

  lucky: Location;
  mkr:   Marker;

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  EDList: Array<Edificio> = [];
  
  EDTemp: Edificio;
  NVTemp: Nivel;
  AUTemp: AreaUtilizable;

  
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
  

  


  loadJS(){
    this.NVTemp = {
      nvid: 1,
      Areas: []
    }
  
    this.AUTemp = {
      auid: "303",
      descripcion: "CEDECYD"
    }
  
    this.NVTemp.Areas.push(this.AUTemp);
  
    this.EDTemp = {
      lat: 14.587224,
      lng: -90.550755,
      id: "BE",
      nombre: "Bienestar Estudiantil",
      Pisos: []
    }
  
    this.EDTemp.Pisos.push(this.NVTemp);
    this.EDList.push(this.EDTemp);
  }

  loadMarkers(){
    for (let ed in this.EDList){
      console.log(ed);
      /*
      this.lucky.markers.push({
        lat:ed.lat,
        lng:ed.lng
      });
      */
    }
  }

  constructor(){
    //this.loadJS();
    //this.addMaker();
  }

 ngOnInit(){

  this.initMap();
  this.loadJS();
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
}

interface Location {
  latitude: number;
  longitude: number;
  mapType: string;
  zoom: number;
  markers: Array<Marker>;
  styles: Array<any>;
}

