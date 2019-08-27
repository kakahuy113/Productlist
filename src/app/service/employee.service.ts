import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }
  url = '../assets/employee.json';
  getdata() {
    return this.http.get(this.url);
  }
}
