import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/pages/service/client.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: any = ''
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notification: ToastrService,
    private userService: ClientService
  ) { }

  ngOnInit(): void {
    this.buildUserForm()
  }

  buildUserForm() {
    this.userForm = this.formBuilder.group({
      name: [''],
      cpf: [''],
      email: [''],
    })
  }
  create(){
    if(!this.userForm.value.name || !this.userForm.value.email || !this.userForm.value.cpf){
      this.notification.error('Preencha todos os campos!', 'ERROR!..')
    }else{
      console.log(this.userForm.value)
      this.userForm.value.cpf = (this.userForm.value.cpf.toString())
         this.userService.createUser(this.userForm.value).subscribe(
        (res: any) => {this.notification.success('Usuario criado com sucesso', 'Sucesso!'),
      this.router.navigate(['client'])},
        error => { console.log(error)}
      )
    }
  }
  black(){
    this.router.navigate(['client'])
  }
}
