import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Coords, Weather } from '../interfaces/interfaces';
import { GeoLocationService } from './geo-location.service';

const endpoint: string = 'https://api.openweathermap.org/data/2.5/forecast';
@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  public weatherSubjet : Subject<any> = new Subject<any>();
  public weather$  : Observable<any>;
  

  constructor(
    private http: HttpClient,
    private _geolocation: GeoLocationService
  ) { 
    this.weather$ = this.weatherSubjet.asObservable().pipe(map(this.structureData));

    this._geolocation.coords$.subscribe((coords)=>{
      this.get(coords);
    });    
    
  
  }

  structureData(data: any) {
    let minMaxPerDay = {};
    data.list.forEach(weatherObject => {
       let date = new Date(weatherObject.dt * 1000);
       let hours = date.getHours();
       let month = date.getMonth();
       let day = date.getDate();
       let key = `${month}-${day}`;

       let tempPerDay : Weather  =  minMaxPerDay[key] || {
         minMaxTemp: {}
       };

       if(!tempPerDay.cod || hours == 16) {
         let source = weatherObject.weather[0];
         //destructur asigment objects
         tempPerDay = {...tempPerDay, ...source};
         tempPerDay.cod = source.id;
         tempPerDay.name = data.city.name;

       }

       if(!tempPerDay.minMaxTemp.min || (weatherObject.main.temp_min < tempPerDay.minMaxTemp.min) ) {
         tempPerDay.minMaxTemp.min = weatherObject.main.temp_min
       }
       if(!tempPerDay.minMaxTemp.max || (weatherObject.main.temp_max > tempPerDay.minMaxTemp.max) ) {
         tempPerDay.minMaxTemp.max = weatherObject.main.temp_max
       }
       
       minMaxPerDay[key] = tempPerDay;
    });

    return Object.values(minMaxPerDay);
  }



  get(coords: Coords){
    let args: string = `?lat=${coords.lat}&lon=${coords.lon}&appid=${environment.key}&units=metric`;
    let url = endpoint + args;
    
    /* if(isDevMode){
      url = 'assets/forecast.json';
    } */
   
    this.http.get(url).subscribe( this.weatherSubjet);
  

/* setTimeout(() => {
  this.weatherSubjet.next({}); 
    })*/
    //observer next() recibe nueva info del observable o complete()
  }
}
