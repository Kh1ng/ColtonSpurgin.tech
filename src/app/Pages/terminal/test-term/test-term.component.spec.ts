import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTermComponent } from './test-term.component';

describe('TestTermComponent', () => {
  let component: TestTermComponent;
  let fixture: ComponentFixture<TestTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTermComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
