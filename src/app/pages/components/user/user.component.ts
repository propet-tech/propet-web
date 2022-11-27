import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { ToastrService } from 'ngx-toastr';
import { Subscriber } from 'rxjs';
import { NotificationService } from 'src/app/core/service/notify.Service';
import { ClientDataSource } from '../../datasource/client-datasource';
import { Client } from '../../model/client.model';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource = new ClientDataSource(this.clientService, this.notify);

  constructor(
    private clientService: ClientService,
    private notify: NotificationService,
    private notifyToastr: ToastrService,
        private key: KeycloakService
  ) { }

  ngOnInit(): void {
    this.dataSource.load()
    this.getAll()
  }
  getAll(){
    this.clientService.getAll().subscribe(
      (response) => { console.log(response)},
      error => {this.notifyToastr.error('Algo não ocorreu bem', 'ERROR!!')}
    )
  }

}
