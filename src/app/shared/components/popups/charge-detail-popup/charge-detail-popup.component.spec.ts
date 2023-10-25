import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeDetailPopupComponent } from './charge-detail-popup.component';

describe('ChargeDetailPopupComponent', () => {
  let component: ChargeDetailPopupComponent;
  let fixture: ComponentFixture<ChargeDetailPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeDetailPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargeDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
