import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detail06Service } from '../services/detail06.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detailflim',
  templateUrl: './detailflim.component.html',
  styleUrls: ['./detailflim.component.css']
})
export class DetailflimComponent implements OnInit {
  film: any;
  constructor(private router: ActivatedRoute, private http:HttpClient, private service : Detail06Service) { }

  ngOnInit() {
    const url = this.router.snapshot.paramMap.get('url');
    this.service.geturl(url).subscribe(data =>{
      this.film=data;
    })
  }
  getFilmId(url:string)
  {
    return this.http.get(url);
  }
  Onback(){
    window.history.back();
    }    
}
