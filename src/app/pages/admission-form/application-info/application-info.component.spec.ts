import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormApplicationInfoComponent } from './application-info.component';

describe('AdmissionFormApplicationInfoComponent', () => {
  let component: AdmissionFormApplicationInfoComponent;
  let fixture: ComponentFixture<AdmissionFormApplicationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormApplicationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormApplicationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
