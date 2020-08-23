import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latihanjs';

  constructor(private router: Router){}

    home(){
      this.router.navigate([''])
    }
    items(){
      this.router.navigate(['items'])

  }
  login(){
    this.router.navigate(['login'])
  }
  cart(){
    this.router.navigate(['buy'])
  }

 
}
