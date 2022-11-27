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
name: string = ''
  constructor(
    private router: Router,
    private keycloak: KeycloakService
  ) { }

  ngOnInit(): void {
  this.name = this.keycloak.getUsername()
  this.title = `Olá, ${this.name[0].toUpperCase() + this.name.toLowerCase().substring(1)}!`
  }

  logout(){
    this.keycloak.logout();
  }

}
