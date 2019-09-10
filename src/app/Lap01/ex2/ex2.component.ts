import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {
  students = [ 
    {       fullName: 'Nguyễn Văn Tèo',       birthday: '20-01-1999',       gender: 'Nam',       photo: '../../assets/images/hammer.jpg',       mark: 8.5     },     
    {       fullName: 'Phan thị nở',       birthday: '20-12-1999',       gender: 'Nữ',       photo: '../../assets/images/hammer.jpg',       mark: 8.5     },     
    {       fullName: 'Nguyễn khá Bảnh',       birthday: '20-01-2000',       gender: 'Nam',       photo: '../../assets/images/hammer.jpg ',       mark: 8.5     },   ]
  constructor() { }

  ngOnInit() {
  }

}
