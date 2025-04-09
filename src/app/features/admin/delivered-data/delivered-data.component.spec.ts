import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredDataComponent } from './delivered-data.component';

describe('DeliveredDataComponent', () => {
  let component: DeliveredDataComponent;
  let fixture: ComponentFixture<DeliveredDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveredDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
