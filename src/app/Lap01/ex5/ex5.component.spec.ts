import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5Component } from './ex5.component';

describe('Ex5Component', () => {
  let component: Ex5Component;
  let fixture: ComponentFixture<Ex5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
