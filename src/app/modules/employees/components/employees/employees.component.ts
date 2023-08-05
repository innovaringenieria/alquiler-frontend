import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../interfaces/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeeForm!: FormGroup;
  dataSource!: Employee[];
  displayedColumns: string[] = ['name', 'matricula', 'action'];

  constructor(private fb: FormBuilder, private empleadosService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      matricula: ['', Validators.required]
    });

    this.getAllEmployees();
  }

  onSubmit(): void {
    const newEmployee: Employee = this.employeeForm.value;
    this.empleadosService.save(newEmployee).subscribe(() => {
      this.employeeForm.reset();
      this.getAllEmployees();
    });
  }

  getAllEmployees(): void {
    this.empleadosService.getAll().subscribe((employees: Employee[]) => {
      this.dataSource = employees;
    });
  }

  onEdit(employee: Employee): void {
    this.employeeForm.patchValue(employee);
  }

  onDelete(id: number): void {
    this.empleadosService.delete(id).subscribe(() => {
      this.getAllEmployees();
    });
  }
}
