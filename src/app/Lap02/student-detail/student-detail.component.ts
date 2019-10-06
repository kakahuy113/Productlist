import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { students } from '../students';
import { courses } from '../courses';
import { enrollments } from '../enrollments';
import { Location} from '@angular/common'
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student;
  enrollments; 
  courses={};
  listofStudent = [...students]
  listofCourse = [...courses]
  listofEnrollment = [...enrollments]
  constructor( private route : ActivatedRoute, private location : Location) { }
  back() {
    this.location.back();
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'));
      
      this.student = students.filter(student => {
        return student.id === id
      })[0];
  
      this.enrollments = this.listofEnrollment.filter(enrollment => {
        return enrollment.studentId === id;
       
      });
      for ( let i =0; i < enrollments.length; ++i) {
        this.courses[enrollments[i].courseId] = this.listofCourse.filter(course => {
          return course.courseId === enrollments[i].courseId
        })[0];
      }
     

    })
  }

}
