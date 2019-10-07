import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Detail06Service {

  constructor(private http : HttpClient) { }
  url = "https://swapi.co/api/films/";
  detailfilms;
  data;
  getdata() {
    return this.http.get(this.url);
  }
  geturl(url : string) {
     return this.http.get(url)
  }
  
}
