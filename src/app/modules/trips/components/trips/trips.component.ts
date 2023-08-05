import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TripsService } from '../../services/trips.service';
import { EmployeesService } from 'src/app/modules/employees/services/employees.service';
import { CarsService } from 'src/app/modules/cars/services/cars.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialogComponent } from '../employee-dialog-component/employee-dialog-component.component';
import {CarDialogComponent} from '../car-dialog-component/car-dialog-component.component'

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripComponent implements OnInit {
  tripStartForm: FormGroup;
  employees:any = []; 
  cars:any = []; 
  trips:any = []; 
  displayedColumns: string[] = ['employee', 'car', 'return'];  


  constructor(
    private fb: FormBuilder, 
    private tripService: TripsService,
    private employeeService: EmployeesService,
    private carService: CarsService,
    private dialog: MatDialog
  ) {
    this.tripStartForm = this.fb.group({
      employeeId: ['', Validators.required],
      carId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadEmployees();
    this.loadCars();
    this.loadTrips();
  }

  loadEmployees() {
    this.employeeService.getAll().subscribe(
      data => {
        this.employees = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  loadCars() {
    this.carService.getAll().subscribe(
      data => {
        this.cars = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  loadTrips() {
    if (this.tripStartForm.valid) {
      this.tripService.save(this.tripStartForm.value).subscribe(
        () => {
          this.loadTrips();
        },
        error => {
          console.error('Error:', error);
        }
      );
    } else {
      console.log('El formulario no es válido');
    }
  }

  startTrip() {
    
  }

  returnCar(tripId: any) {
    
  }

  openEmployeeDialog(): void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '250px',
      data: this.employees
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.tripStartForm.controls['employeeId'].setValue(result?.id);
    });
  }

  openCarsDialog(): void {
    const dialogRef = this.dialog.open(CarDialogComponent);

    dialogRef.afterClosed().subscribe(car => {
      if (car) {
         this.tripStartForm.controls['carId'].setValue(car?.id);        
      }
    });
  }
}

