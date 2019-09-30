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
  lat: number = -27.5948698;
  lng: number = -48.5482195;
  zoom: number = 11;

  restaurantValid: boolean = false;
  positions = [{
    "lat": -27.6948698,
    "lng": -48.5382195
  }]

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.bruno()
  }

  public addMarker(lat: number,lng: number) {
    
    let node = document.getElementsByTagName('agm-map')[0]
    node.innerHTML += '<agm-marker [latitude]="'+lat+'" [longitude]="'+lng+'" [label]="M"><agm-info-window>Holy</agm-info-window></agm-marker>'

  }
  public bruno() {
    this.positions[2].lat += -27.6048698
    this.positions[2].lng += -48.5382195
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
  seeRestaurantsFloripa() {
    if (this.restaurantValid == false) {
      this.restaurantValid = true;
    } else {
      this.restaurantValid = false;
    }
    if (this.restaurantValid == true) {
      this.rest.getRestaurantsFloripa().subscribe((res: Response) => {
        console.log(res)
        
          this.addMarker(res.results[0].geometry.location.lat, res.results[0].geometry.location.lng);
        
      })
    }
  }
}