import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/pages/model/pet.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  users: Pet[] = [
    { id: 1, name: 'batata', clientId: '1', description: "teste",  weight: 10 },
    { id: 1, name: 'batata', clientId: '1', description: "teste",  weight: 10 },
    { id: 1, name: 'batata', clientId: '1', description: "teste",  weight: 10 },
    { id: 1, name: 'batata', clientId: '1', description: "teste",  weight: 10 },
    { id: 1, name: 'batata', clientId: '1', description: "teste",  weight: 10 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
