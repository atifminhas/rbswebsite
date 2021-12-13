import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormFatherDetailComponent } from './father-detail.component';

describe('AdmissionFormFatherDetailComponent', () => {
  let component: AdmissionFormFatherDetailComponent;
  let fixture: ComponentFixture<AdmissionFormFatherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormFatherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormFatherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
