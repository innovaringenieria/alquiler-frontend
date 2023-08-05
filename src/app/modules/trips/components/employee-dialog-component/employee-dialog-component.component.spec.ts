import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDialogComponentComponent } from './employee-dialog-component.component';

describe('EmployeeDialogComponentComponent', () => {
  let component: EmployeeDialogComponentComponent;
  let fixture: ComponentFixture<EmployeeDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDialogComponentComponent]
    });
    fixture = TestBed.createComponent(EmployeeDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
