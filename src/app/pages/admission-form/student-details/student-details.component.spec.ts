import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormStudentDetailsComponent } from './student-details.component';

describe('AdmissionFormStudentDetailsComponent', () => {
  let component: AdmissionFormStudentDetailsComponent;
  let fixture: ComponentFixture<AdmissionFormStudentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormStudentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
