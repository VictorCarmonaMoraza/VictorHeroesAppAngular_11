import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  //Propiedad para almacenar los datos de 
  private _auth: Auth | undefined;

  constructor(private http:HttpClient) { }


  login():Observable<Auth> {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
      tap(resp=>this._auth =resp)
    )
  }

  get auth(): Auth {
    return { ...this._auth! };
  }
}
