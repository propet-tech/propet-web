import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../../model/client.model';
import { User } from '../../model/user.model';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../../../app.component.css']
})
export class UserComponent implements OnInit {

  data: Client[] = []

  constructor(
    private service: ClientService,
    // private notification: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (result) => {
        this.data = result.content;
      },
      (error) => {
        // this.notification.error(error)
      }
    )
  }

}
