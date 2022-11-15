import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pet } from 'src/app/pages/model/pet.model';
import { PetService } from 'src/app/pages/service/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  users: Pet[] = []
  constructor(
    private petService: PetService,
    private notification: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getAll()
  }
  public delete(id: any){
    console.log(id)
    this.petService.delete(parseInt(id)).subscribe(
      (response) => { this.notification.success(`O pet foi excluido`, 'Sucesso')},
      error => {this.notification.error('Algo não ocorreu bem', 'ERROR')}
    )
  }
  getAll(){
    this.petService.getAll().subscribe(
      (response: any) => {this.users = response.content},
      error => {this.notification.error('Algo não ocorreu bem', 'ERROR')}
    )
  }

}
