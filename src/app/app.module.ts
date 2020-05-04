import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentweatherComponent } from './components/currentweather/currentweather.component';
import { WeathericonComponent } from './components/weathericon/weathericon.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeoLocationButtonComponent } from './components/geo-location-button/geo-location-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentweatherComponent,
    WeathericonComponent,
    WeatherCardComponent,
    ForecastComponent,
    LoadingComponent,
    GeoLocationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
