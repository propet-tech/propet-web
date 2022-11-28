import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = ''

  constructor(
    private router: Router,
    private keycloak: KeycloakService
  ) { }

  ngOnInit(): void {
    let name = this.keycloak.getUsername()
    this.title = `Olá, ${name[0].toUpperCase() + name.toLowerCase().substring(1)}!`

    this.keycloak.getToken().then(
      r => console.log(r)
    )
  }

  logout(){
    this.keycloak.logout();
  }

}
