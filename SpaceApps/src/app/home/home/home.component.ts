import { Component, OnInit } from '@angular/core';
import { ApiArdService } from '../../services/api-ard.service';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscription: Subscription;
  measure: any;

  constructor(private apiService: ApiArdService) { }

  ngOnInit() {
    const source = interval(3000)
    this.subscription = source.subscribe(val => {
      console.log(val);
      this.apiService.getMeasurements().subscribe(measure => {
        console.log("API CALLED. RESULT:")
        console.log(measure);
        this.measure = measure;
      })
    })
  }
  ngOnDestroy(){
    // this.subscription && this.subscription.unsubscribe();
  }
  changeColor(color: string){
    if(color == "green"){
      this.measure = 5
    }else if(color == "red"){
      this.measure = 0
    }else{
      this.measure = 3
    }
  }
}
