import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'employees', loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule),canActivate: [AuthGuard] },
  { path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(m => m.CarsModule),canActivate: [AuthGuard] },
  { path: 'trips', loadChildren: () => import('./modules/trips/trips.module').then(m => m.TripsModule),canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
