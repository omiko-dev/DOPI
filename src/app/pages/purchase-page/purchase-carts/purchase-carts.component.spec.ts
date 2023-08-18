import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCartsComponent } from './purchase-carts.component';

describe('PurchaseCartsComponent', () => {
  let component: PurchaseCartsComponent;
  let fixture: ComponentFixture<PurchaseCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
