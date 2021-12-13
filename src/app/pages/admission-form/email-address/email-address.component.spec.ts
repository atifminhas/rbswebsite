import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormEmailAddressComponent } from './email-address.component';

describe('AdmissionFormEmailAddressComponent', () => {
  let component: AdmissionFormEmailAddressComponent;
  let fixture: ComponentFixture<AdmissionFormEmailAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormEmailAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormEmailAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
