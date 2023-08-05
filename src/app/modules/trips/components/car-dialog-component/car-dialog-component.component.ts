import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/modules/cars/interfaces/car.model';
import { CarsService } from 'src/app/modules/cars/services/cars.service';


@Component({
  selector: 'app-car-dialog-component',
  templateUrl: './car-dialog-component.component.html',
  styleUrls: ['./car-dialog-component.component.scss']
})
export class CarDialogComponent implements OnInit {

  cars!: Car[];

  constructor(
    public dialogRef: MatDialogRef<CarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private carsService: CarsService
  ) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carsService.getAll().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

  selectCar(car: Car): void {
    this.dialogRef.close(car);
  }

}
