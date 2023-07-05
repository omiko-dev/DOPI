import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScrollDownComponent } from './home-scroll-down.component';

describe('HomeScrollDownComponent', () => {
  let component: HomeScrollDownComponent;
  let fixture: ComponentFixture<HomeScrollDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeScrollDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeScrollDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
