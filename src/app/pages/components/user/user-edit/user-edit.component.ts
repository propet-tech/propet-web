import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/pages/service/client.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userForm: any = ''
  id = Number(this.activateRoute.snapshot.paramMap.get('id'))
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notification: ToastrService,
    private userService: ClientService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.buildUserForm()
    this.getBYuser()
  }

  buildUserForm() {
    this.userForm = this.formBuilder.group({
      name: [''],
      cpf: [''],
      email: [''],
    })
  }
  getBYuser(){
    this.userService.getByID(this.id).subscribe(
      (response: any) => {this.fillForm(response)},
      error => { this.notification.error('Usuario não encontrado!', 'ERROR!..')}
    )
  }
  fillForm(user: any){
    //this.clientsForm.controls['addressline1'].setValue(client.addressline1);
    this.userForm.controls['name'].setValue(user.name)
    this.userForm.controls['email'].setValue(user.email)
    this.userForm.controls['cpf'].setValue(user.cpf)
  }
  update(){
    if(!this.userForm.value.name || !this.userForm.value.email || !this.userForm.value.cpf){
      this.notification.error('Preencha todos os campos!', 'ERROR!..')
    }else{
      console.log(this.userForm.value)
      this.userForm.value.cpf = (this.userForm.value.cpf.toString())
         this.userService.updateUser(this.userForm.value).subscribe(
        (res: any) => {this.notification.success('Usuario Alterar com sucesso', 'Sucesso!'),
      this.router.navigate(['client'])},
        error => { console.log(error)}
      )
    }
  }
  black(){
    this.router.navigate(['client'])
  }
}

