import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormMobileNumberComponent } from './mobile-number.component';

describe('AdmissionFormMobileNumberComponent', () => {
  let component: AdmissionFormMobileNumberComponent;
  let fixture: ComponentFixture<AdmissionFormMobileNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormMobileNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormMobileNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
