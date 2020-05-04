import { Injectable } from '@angular/core';
import { Coords } from '../interfaces/interfaces';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {
public coordsSubject: Subject<Coords> = new Subject<Coords>();
public coords$: Observable<Coords>= this.coordsSubject.asObservable();
public permission$: Promise<string>;
public coordsPromise: Promise<Coords>;

constructor() { 
  this.permission$ = (navigator as any).permissions.query({name:'geolocation'}).then((permission) => {
    permission.state
  }).catch((err) => {
    console.error(err);    
  });
}
//compoenete obtiene la ubicacion
requestGeoLocation(){
  //this.coords$ = this.getGeoLocation();
  if(!this.coordsPromise){
    this.coordsPromise = this.getGeoLocation();
  }
  this.coordsPromise.then(coords => {
    this.coordsSubject.next(coords);
  })
  
}


getGeoLocation(): Promise<Coords> {
  return new Promise((resolve, reject) => {
    if(!navigator || !('geolocation' in navigator)) return reject('La geolocalizacion no esta disponible');
    
    (navigator as any).geolocation.getCurrentPosition((position)=> {
      resolve({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  })
}



//public coords$: Promise<Coords>;
//singlenton los servicios solo se crean una vez 
//solo se crea un objeto por cada servicio 
//y se comparte entre todos los que necesitenel servicio.
//Las propiedas asignadas, se comparten entre los componentes
// ej. si a ocupa cords y b tambien se necesita que solo uno lo solicite par que en todos se vea reflejado
  //
}
