import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDialogComponentComponent } from './car-dialog-component.component';

describe('CarDialogComponentComponent', () => {
  let component: CarDialogComponentComponent;
  let fixture: ComponentFixture<CarDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarDialogComponentComponent]
    });
    fixture = TestBed.createComponent(CarDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
