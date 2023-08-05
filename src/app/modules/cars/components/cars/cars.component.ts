import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../../interfaces/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  displayedColumns: string[] = ['model', 'brand', 'productionDate', 'actions'];
  dataSource!: Car[];
  carForm!: FormGroup;

  constructor(
    private carsService: CarsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCars();
    this.carForm = this.formBuilder.group({
      model: ['', Validators.required],
      brand: ['', Validators.required],
      productionDate: ['', Validators.required]
    });
  }

  getCars(): void {
    this.carsService.getAll().subscribe(data => {
      this.dataSource = data;
    });
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      const newCar: Car = this.carForm.value;
    this.carsService.save(newCar).subscribe(() => {
      this.carForm.reset();
      this.getCars();
    });
    }
  }

  onEdit(car: Car): void {
    this.carForm.patchValue(car);
  }

  onDelete(id: number): void {
    this.carsService.delete(id).subscribe(() => {
      this.getCars();
    });
  }
    
}
