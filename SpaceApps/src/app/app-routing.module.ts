import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { ProfileComponent } from './profile/profile/profile.component';
import { HistDataComponent } from './histData/hist-data/hist-data.component';
import { AirQualityMapComponent } from './airQualityMap/air-quality-map/air-quality-map.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'hist-data', component: HistDataComponent},
  { path: 'airQualityMap', component: AirQualityMapComponent},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [MatFormFieldModule,MatButtonModule,MatInputModule, RouterModule]
})
export class AppRoutingModule { }
