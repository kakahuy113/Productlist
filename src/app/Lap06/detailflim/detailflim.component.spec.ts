import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailflimComponent } from './detailflim.component';

describe('DetailflimComponent', () => {
  let component: DetailflimComponent;
  let fixture: ComponentFixture<DetailflimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailflimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailflimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
