import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Place } from '../models/place';
import { RestService } from '../services/rest.service';
import { Response } from '../models/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  place = new Place();
  lat: number = -33.8599358;
  lng: number = 151.2090295;
  zoom: 8;


  constructor(private rest: RestService) { }

  ngOnInit() {
  }

  search(f: NgForm) {
    this.place.search = f.value.name;
    this.setMap(this.place);
  }
  setMap(place: Place) {
      this.rest.getPlaceData(place).subscribe((res: Response) => {
        place = res.candidates[0];
        console.log(res)

        this.lat = place.geometry.location.lat
        this.lng = place.geometry.location.lng
      })
  }
}