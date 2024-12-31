import { HttpClient } from '@angular/common/http';
import { effect, Injectable, Injector, signal } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

type Response = {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "https://reqres.in/api";
  constructor(private httpClient: HttpClient, private router: Router, private inject: Injector) { }

  login(name: string, password: string) {
    return this.httpClient.post<Response>("https://reqres.in/api/login", { "email": name, "password": password }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token);    
        this.router.navigate(["/home"]);        
      })
    )
  }

  logout() {
    sessionStorage.removeItem("token")
    this.router.navigate(["/"])
    
  }
}
