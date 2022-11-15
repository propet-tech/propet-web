import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PetService } from 'src/app/pages/service/pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {
  PetForm: any = ''
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notification: ToastrService,
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.buildPetForm() 
  }
  buildPetForm() {
    this.PetForm = this.formBuilder.group({
      name: [''],
      clientId: [''],
      weight: [''],
      description: [''],
      category: [''],
      breed: {
        id: [''],
        type: [''],
        name: ['']

      },
    })
  }
  back(){
    this.router.navigate(['pet'])
  }
  create(){
    console.log(this.PetForm.value)
   this.petService.create(this.PetForm.value).subscribe(
      (response) => {this.back(), this.notification.success(`Pet ${this.PetForm.value.name }criado`, 'Sucesso')},
      error => {debugger}
    )
  
}
}
