import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDeliveredFormComponent } from './not-delivered-form.component';

describe('NotDeliveredFormComponent', () => {
  let component: NotDeliveredFormComponent;
  let fixture: ComponentFixture<NotDeliveredFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotDeliveredFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotDeliveredFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
