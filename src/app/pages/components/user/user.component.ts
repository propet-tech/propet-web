import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [
    { id: 1, name: 'batata', status: true, pet: 'batinha', number: 9 },
    { id: 2, name: 'henri', status: true, pet: 'fil', number: 1 },
    { id: 3, name: 'theo', status: true, pet: 'gatinho', number: 9 },
    { id: 4, name: 'deibi', status: true, pet: 'cachorro', number: 5 }
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.users)
  }

}
