import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { EmployeeDialogComponent } from './components/employee-dialog-component/employee-dialog-component.component';
import { TripComponent } from './components/trips/trips.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CarDialogComponent } from './components/car-dialog-component/car-dialog-component.component';

const routes: Routes = [
  { path: '', component: TripComponent },
];

@NgModule({
  declarations: [TripComponent,
  EmployeeDialogComponent,CarDialogComponent],
  imports: [
     RouterModule.forChild(routes),
    CommonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule  ,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TripsModule { }
