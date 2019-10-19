import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceApps';
  loginDone: boolean = false;

  makeLogin(){
    this.loginDone = true;
  }
  unmakeLogin(){
    this.loginDone = false;
  }
}

