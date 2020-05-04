import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from 'src/app/services/geo-location.service';

@Component({
  selector: 'app-geo-location-button',
  templateUrl: './geo-location-button.component.html',
  styleUrls: ['./geo-location-button.component.sass']
})
export class GeoLocationButtonComponent implements OnInit {
  active: boolean = false;
  constructor(public _geolocation : GeoLocationService) { }

  ngOnInit(): void {
    this._geolocation.permission$.then((status) => this.active = (status == 'granted'))

    if(this.active){
      this._geolocation.requestGeoLocation();
    }
  }

}
