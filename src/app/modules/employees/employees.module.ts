import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  { path: '', component: EmployeesComponent,canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule  ,
    MatCardModule,
    MatFormFieldModule
  ],
  exports:[
    RouterModule
  ]
})
export class EmployeesModule { }
