import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormRelativeComponent } from './relative.component';

describe('RelativeComponent', () => {
  let component: AdmissionFormRelativeComponent;
  let fixture: ComponentFixture<AdmissionFormRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
