import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccssAlertComponent } from './succss-alert.component';

describe('SuccssAlertComponent', () => {
  let component: SuccssAlertComponent;
  let fixture: ComponentFixture<SuccssAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccssAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccssAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
