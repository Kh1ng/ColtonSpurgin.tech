import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirForceComponent } from './air-force.component';

describe('AirForceComponent', () => {
  let component: AirForceComponent;
  let fixture: ComponentFixture<AirForceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirForceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
