import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDeliveryComponent } from './save-delivery.component';

describe('SaveDeliveryComponent', () => {
  let component: SaveDeliveryComponent;
  let fixture: ComponentFixture<SaveDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
