import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  BASE_URL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=";
  HEADERS = "&inputtype=textquery&fields=formatted_address,name,geometry"
  API_KEY = "&key=AIzaSyCh-5DXc6HHbzhm3OL-9HgmtJtnHBaXNk0";

  constructor(private http: HttpClient) { }

  public getPlaceData(place: Place) {
    console.log(place.search)
    return this.http.get(this.BASE_URL + place.search + this.HEADERS + this.API_KEY)
  }
}
