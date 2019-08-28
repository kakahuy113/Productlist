import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../models/ex3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ex3Service {
  url = '../assets/ex3.json';
  constructor(private http : HttpClient) { }
  getdata(): Observable<products[]>{
   return this.http.get<products []>(this.url);
  }
}
