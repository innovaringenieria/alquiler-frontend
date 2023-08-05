import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/modules/employees/interfaces/employee.model';


@Component({
  selector: 'app-employee-dialog-component',
  templateUrl: './employee-dialog-component.component.html',
  styleUrls: ['./employee-dialog-component.component.scss']
})
export class EmployeeDialogComponent implements OnInit {
  employees!: Employee[];

  constructor(
    public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee[]) {}

  ngOnInit(): void {
    this.employees = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectEmployee(employee: Employee) {
    this.dialogRef.close(employee);
  }
}
