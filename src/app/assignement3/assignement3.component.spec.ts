import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignement3Component } from './assignement3.component';

describe('Assignement3Component', () => {
  let component: Assignement3Component;
  let fixture: ComponentFixture<Assignement3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignement3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
