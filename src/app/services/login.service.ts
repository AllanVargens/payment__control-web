import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(name: string, password: string) {
    return this.httpClient.post<Response>("https://reqres.in/api/login", { "email": name, "password": password }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token);
        this.router.navigate(["/home"])
      })
    )
  }

  logout() {
    sessionStorage.removeItem("token")
  }
}
