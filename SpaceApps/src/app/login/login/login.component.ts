import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public appRoot: AppComponent) { 
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.appRoot.makeLogin()
  }

}
