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
      userId: [''],
      weight: [''],
      description: [''],
    })
  }
  back(){
    this.router.navigate(['pet'])
  }
  create(){
   this.petService.Create(this.PetForm.value).subscribe(
      (response) => {this.back(), this.notification.success(`Pet ${this.PetForm.value.name }criado`, 'Sucesso')},
      error => {debugger}
    )
  
}
}
