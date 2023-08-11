import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProductCartComponent } from './profile-product-cart.component';

describe('ProfileProductCartComponent', () => {
  let component: ProfileProductCartComponent;
  let fixture: ComponentFixture<ProfileProductCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileProductCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
