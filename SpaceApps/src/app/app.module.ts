import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule,MatTableModule, MatPaginatorModule } from  '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule ,HttpClientJsonpModule  } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { HistDataComponent } from './histData/hist-data/hist-data.component';
import { AirQualityMapComponent } from './airQualityMap/air-quality-map/air-quality-map.component';
import { ApiArdService } from './services/api-ard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    HistDataComponent,
    AirQualityMapComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [ApiArdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
