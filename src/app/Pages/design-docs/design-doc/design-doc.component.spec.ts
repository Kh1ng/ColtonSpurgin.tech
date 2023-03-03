import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDocComponent } from './design-doc.component';

describe('DesignDocComponent', () => {
  let component: DesignDocComponent;
  let fixture: ComponentFixture<DesignDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
