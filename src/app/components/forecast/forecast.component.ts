import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { showUpStaggered } from 'src/app/animations/showUp.animations';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  animations: [showUpStaggered]
})
export class ForecastComponent implements OnInit {

  constructor(public _forecast : ForecastService ) { }

  ngOnInit(): void {
  }

}
