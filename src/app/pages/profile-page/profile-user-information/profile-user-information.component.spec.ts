import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserInformationComponent } from './ProfileUserInformationComponent';

describe('ProfileUserInformationComponent', () => {
  let component: ProfileUserInformationComponent;
  let fixture: ComponentFixture<ProfileUserInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileUserInformationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
