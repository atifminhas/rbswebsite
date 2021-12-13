import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormAskAnotherStudentComponent } from './ask-another-student.component';

describe('AdmissionFormAskAnotherStudentComponent', () => {
  let component: AdmissionFormAskAnotherStudentComponent;
  let fixture: ComponentFixture<AdmissionFormAskAnotherStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormAskAnotherStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormAskAnotherStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
