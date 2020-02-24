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
export class AppComponent implements OnInit{

  lucky: Location;
  mkr:   Marker;

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  constructor(){
    this.addMaker();
  }

 ngOnInit(){

  this.addMaker();

  //Don Jose 14.583848, -90.749083
  /*
  this.lucky = {
    latitude:  14.589282,
    longitude: -90.551469,
    mapType: "roadmap",
    zoom: 15,
    markers: [
      {
          lat: 14.589282,
          lng: -90.551469
      }
    ]
  };
  */
 }

 addMaker(){

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
 }

  /*

  location: Location;


  title = 'candy';

  lat: number    = 14.589282;
  lng: number    = -90.551469; 
  zoom: number   = 15;

  markers: Array<Marker>;
  
  //markers: MyMarker[];
  //map: AgmMap;

  //AgmMap: google.maps.Map;


  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };


  getpos(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 16;
        //console.log('hola');
      },error => {

      },this.options);
    }
  }

  createMarker() {
    

    // list of hardcoded positions markers 
    //14.587851, -90.551786
    //14.589289, -90.552388
     var myLatLngList = {
         myLatLng : [{ lat: 14.587851, lng: -90.551786 }, { lat: 14.589289, lng: -90.552388 }]    
         };

        //iterate latLng and add markers 
       for(const data of myLatLngList.myLatLng){
         var marker = new google.maps.Marker({
             position: data,
             map: this.map,
             title: 'markers'
         });
      }

      
 };

  ngOnInit(){
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 16;
        console.log("Lat: "+this.lat);
        console.log("Lat: "+this.lng);
        //console.log('hola');
      },error => {

      },this.options);
    }
  }*/
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
}


