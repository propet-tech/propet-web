import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from '../../service/client.service';
import { PetService } from '../../service/pet.service';
import * as moment from 'moment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countPet: number = 0;
  countClient: number = 0;
  dateDay: string = ''
  constructor(
    private notification: ToastrService,
    private petService: PetService,
    private clientService: ClientService
  ) { }

  ngOnInit(){ 
    this.loadPet()
    this.loadClient()
    this.dateDay = moment().format('DD/MM');
  }
  loadPet(){
    this.petService.getCountPet().subscribe(
      (response) => { this.countPet  = response, alert(response)},
      error => {this.notification.error('Algo não ocorreu bem', 'ERROR!!!')}
    )
  }
  loadClient(){
    this.clientService.getCount().subscribe(
      (response) => { this.countClient  = response, alert(response)},
      error => {this.notification.error('Algo não ocorreu bem', 'ERROR!!!')}
    )
  }

}
