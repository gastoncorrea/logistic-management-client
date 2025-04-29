import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDeliveredDataComponent } from './not-delivered-data.component';

describe('NotDeliveredDataComponent', () => {
  let component: NotDeliveredDataComponent;
  let fixture: ComponentFixture<NotDeliveredDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotDeliveredDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotDeliveredDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
