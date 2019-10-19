import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatFormFieldModule,MatInputModule } from  '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { HistDataComponent } from './histData/hist-data/hist-data.component';
import { AirQualityMapComponent } from './airQualityMap/air-quality-map/air-quality-map.component';
import { BluetoothReadComponent } from './home/bluetooth-read/bluetooth-read.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    HistDataComponent,
    AirQualityMapComponent,
    BluetoothReadComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    WebBluetoothModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
