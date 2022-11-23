import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltLandingComponent } from './single-page.component';

describe('AltLandingComponent', () => {
  let component: AltLandingComponent;
  let fixture: ComponentFixture<AltLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AltLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
