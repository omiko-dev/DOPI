import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProductPurchaseComponent } from './profile-product-purchase.component';

describe('ProfileProductPurchaseComponent', () => {
  let component: ProfileProductPurchaseComponent;
  let fixture: ComponentFixture<ProfileProductPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileProductPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileProductPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
