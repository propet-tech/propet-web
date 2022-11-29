import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = ''
  breadcrumbList: string[] = [];

  constructor(
    private router: Router,
    private keycloak: KeycloakService,
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let name = this.keycloak.getUsername()
    this.title = `Olá, ${name[0].toUpperCase() + name.toLowerCase().substring(1)}!`
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbList = []
        this.createBreadcrumb(this.active.root)
      });
  }

  createBreadcrumb(active: ActivatedRoute) {
    const children: ActivatedRoute[] = active.children;

    if (children.length === 0) {
      return
    }

    children.forEach(
      child => {
        this.breadcrumbList.push(child.snapshot.data['name'])
        return this.createBreadcrumb(child)
      }
    )
  }
}
