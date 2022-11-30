import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Client } from '../../model/client.model';
import { User } from '../../model/user.model';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../../../app.component.css']
})
export class UserComponent implements OnInit {

  data: Line[] = []

  paginator: Paginator = {
    current: 0,
    totalPages: []
  };

  constructor(
    private service: ClientService,
    // private notification: ToastrService
  ) { }

  ngOnInit(): void {
    this.list(0)
  }

  list(page: number) {
    this.service.getAll(
      { page: page }
    ).subscribe(
      (result) => {
        let data: Line[] = result.content.map(
          e => {
            return {
              name: e.name,
              cpf: e.cpf,
              id: e.id,
              email: e.email,
              petNumber: this.getPetCount(e.id)
            }
          }
        )
        this.data = data;
        this.paginator.totalPages = new Array(result.totalPages)
        this.paginator.current = result.number;
      },
      (error) => {
        // this.notification.error(error)
      }
    )
  }

  getPetCount(id: number): Observable<number> {
    return this.service.getPetCount(id)
  }

  next() {

  }

  previous() {
    if (this.paginator.current != 0)
      this.list(this.paginator.current -1) 
    else
      this.list(0)
  }
}

interface Line {
  name: string;
  cpf: string;
  id: number;
  email: string;
  petNumber: Observable<number>
}

interface Paginator {
  current: number,
  totalPages: number[]
}
