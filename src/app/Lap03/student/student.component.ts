import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent2 implements OnInit {
  student: FormGroup;
  btn: Boolean = true;
  submit = false;
  long;
  wide;

  point2;
  power2;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.student = this.formBuilder.group({
      name: ['' , Validators.required , ],
      birth: ['', Validators.required],
      gender: ['', Validators.required],
      point: ['', Validators.required],
    })
  }

  get f() { return this.student.controls; }

  onSubmit() {
    this.submit = true

    if (this.student.invalid) {
      return window.alert("Must write all imfomation")
    }

    if (this.student.value.point < 5) {
      this.power2 = "failed"
    }
    if (this.student.value.point > 5) {
      this.power2 = "pass"
    }

  }


}
