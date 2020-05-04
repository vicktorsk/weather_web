import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from 'src/app/services/current-weather.service';
import { showUp } from 'src/app/animations/showUp.animations';

@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.scss'],
  animations: [showUp]
})
export class CurrentweatherComponent implements OnInit {

  constructor(
    public _weather: CurrentWeatherService
  ) { }

  ngOnInit(){
    this._weather.weather$.subscribe(console.log);
  }

}
