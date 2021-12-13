import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormMotherDetailsComponent } from './mother-details.component';

describe('MotherDetailsComponent', () => {
  let component: AdmissionFormMotherDetailsComponent;
  let fixture: ComponentFixture<AdmissionFormMotherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormMotherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormMotherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
