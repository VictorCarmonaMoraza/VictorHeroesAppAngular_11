import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Obtenemos del servicio la propiedad auth
  get auth(): Auth {
    //let usuario: Auth = { usuario: '', email: '', id: 0 };
    return this.authService.auth;
  }
  

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['./auth']);
  }

 

}
