import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocationButtonComponent } from './geo-location-button.component';

describe('GeoLocationButtonComponent', () => {
  let component: GeoLocationButtonComponent;
  let fixture: ComponentFixture<GeoLocationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLocationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
