import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormSubmitApplicationComponent } from './submit-application.component';

describe('AdmissionFormSubmitApplicationComponent', () => {
  let component: AdmissionFormSubmitApplicationComponent;
  let fixture: ComponentFixture<AdmissionFormSubmitApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormSubmitApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormSubmitApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
