import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {
  listEmployees: any = [];
  constructor( private  employee: EmployeeService) { }

  ngOnInit() {
    this.employee.getdata().subscribe(
      data => this.listEmployees = data)
  }

}
