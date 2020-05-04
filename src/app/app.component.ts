import { Component } from '@angular/core';
import { GeoLocationService } from './services/geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'weather';

  constructor(
    private _geolocation: GeoLocationService
  ) { 

     //this._forecast.weather$.subscribe(console.log);
     this._geolocation.requestGeoLocation();
     
    
  }



}
