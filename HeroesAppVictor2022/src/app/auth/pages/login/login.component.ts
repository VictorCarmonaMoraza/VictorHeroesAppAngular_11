import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService:AuthService
  ) { }
  
  login() {
    this.authService.login()
      .subscribe(resp => {
        console.log(resp);
        if (resp.id) {
          this.router.navigate(['./heroes']);
        }
    })
    
  }

}
