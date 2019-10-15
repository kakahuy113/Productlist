import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpstudentComponent } from './httpstudent.component';

describe('HttpstudentComponent', () => {
  let component: HttpstudentComponent;
  let fixture: ComponentFixture<HttpstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
