import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLabComponent } from './home-lab.component';

describe('HomeLabComponent', () => {
  let component: HomeLabComponent;
  let fixture: ComponentFixture<HomeLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
