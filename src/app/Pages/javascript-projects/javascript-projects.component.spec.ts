import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptProjectsComponent } from './javascript-projects.component';

describe('JavascriptProjectsComponent', () => {
  let component: JavascriptProjectsComponent;
  let fixture: ComponentFixture<JavascriptProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
