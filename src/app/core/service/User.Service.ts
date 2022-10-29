import { HttpClient } from "@angular/common/http";
import { Injectable, Type } from "@angular/core";
import { async } from "@angular/core/testing";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../model/user_login.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  async authenticateUser(credentials: any) {
    return this.http.post<any>(`${environment.api}/auth/signin`, credentials)
  }

  get isLoggedIn() {
    if (localStorage.getItem('acess_token') != null) return true
    return false
  }

  logOut() {
    this.router.navigate(['']);
    localStorage.clear();
  }
  register(user: User) {
    return this.http.post<any>(`${environment.api}/auth/signup`, user)
  }
}
