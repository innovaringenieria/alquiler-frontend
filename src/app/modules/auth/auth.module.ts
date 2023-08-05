import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },  
];


@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,

  ],
  exports:[LoginComponent]
})
export class AuthModule { }
