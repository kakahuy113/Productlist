import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmlsComponent } from './filmls.component';

describe('FilmlsComponent', () => {
  let component: FilmlsComponent;
  let fixture: ComponentFixture<FilmlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
