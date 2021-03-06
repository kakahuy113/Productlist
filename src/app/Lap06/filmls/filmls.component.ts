import { Component, OnInit } from '@angular/core';
import { Detail06Service } from '../services/detail06.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-filmls',
  templateUrl: './filmls.component.html',
  styleUrls: ['./filmls.component.css']
})
export class FilmlsComponent implements OnInit {
  url='https://swapi.co/api/films/';
  inforFilm: any;
  listFilms:any;

  constructor( private http: HttpClient , private service : Detail06Service ) { }

  ngOnInit() {
    this.service.getdata().subscribe(data=>{
      this.inforFilm=data;
      this.listFilms= this.inforFilm.results;
    })
  }
 


}
