import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhactivityComponent } from './ghactivity.component';

describe('GhactivityComponent', () => {
  let component: GhactivityComponent;
  let fixture: ComponentFixture<GhactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhactivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
