import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ApiArdService {

  constructor(private http: HttpClient) { }

  getMeasurements() {
    
    const url = "http://localhost:3000/api/measures?&callback=JSONP_CALLBACK"

    return this.http.jsonp(url, "");
  }

}
