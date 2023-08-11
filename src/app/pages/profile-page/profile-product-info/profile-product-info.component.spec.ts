import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProductInfoComponent } from './profile-product-info.component';

describe('ProfileProductInfoComponent', () => {
  let component: ProfileProductInfoComponent;
  let fixture: ComponentFixture<ProfileProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileProductInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
