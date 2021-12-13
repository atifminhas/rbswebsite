import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormAskRelativeComponent } from './ask-relative.component';

describe('AskRelativeComponent', () => {
  let component: AdmissionFormAskRelativeComponent;
  let fixture: ComponentFixture<AdmissionFormAskRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormAskRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormAskRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
