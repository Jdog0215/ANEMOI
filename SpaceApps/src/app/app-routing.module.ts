import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [MatFormFieldModule,MatButtonModule,MatInputModule, RouterModule]
})
export class AppRoutingModule { }
