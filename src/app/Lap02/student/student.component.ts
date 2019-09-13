import { Component, OnInit } from '@angular/core';
import { students } from '../students';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  searchText;
  listStudents = []
  config : any;
  constructor() { 
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.listStudents.length
  };
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  onDeleteStudent(id) {
    let isDelete = confirm("Are you sure delete this student?")
    if (isDelete) {
      let temp = this.listStudents.filter(student => {
        return student.id !== id
      })
      this.listStudents = [...temp]
    }
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    pageOfItems = pageOfItems;
}

  pageOfItems: Array<any>;

  ngOnInit() {
    this.listStudents = students.map((student, i) => (student));
  }

}
