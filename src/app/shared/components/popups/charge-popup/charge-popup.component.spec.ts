import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargePopupComponent } from './charge-popup.component';

describe('ChargePopupComponent', () => {
  let component: ChargePopupComponent;
  let fixture: ComponentFixture<ChargePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
