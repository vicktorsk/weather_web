import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Coords, Weather } from '../interfaces/interfaces';
import { GeoLocationService } from './geo-location.service';


@Injectable({
  providedIn: 'root'
})


export class CurrentWeatherService {
  
  public weatherSubjet : Subject<any> = new Subject<any>();
  public weather$  : Observable<any>;
  
  endpoint: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient, private _geolocation: GeoLocationService) {
    this.weather$ = this.weatherSubjet.asObservable().pipe(map((data: any) => {
        let {name, cod }  = data;
        let mainweather = data.weather[0];

        let weather: Weather = {
           name: name,
           cod: cod,
           temp: data.main.temp,
           ...mainweather
         }

         return weather;
      })
    );

    this._geolocation.coords$.subscribe((coords)=>{
      this.get(coords);
    });



  }

  get(coords: Coords){
    //observable //observer
    let args: string = `?lat=${coords.lat}&lon=${coords.lon}&appid=${environment.key}&units=metric`;
    let url = this.endpoint + args;
    
    /* if(isDevMode){
      url = 'assets/weather.json';
    } */
   
    this.http.get(url).subscribe( this.weatherSubjet);
    


/* setTimeout(() => {
  this.weatherSubjet.next({}); 
    })*/
    //observer next() recibe nueva info del observable o complete()
  } 

  //subject //is al objeto y suscribirse y diufundirla co notros observers



}
