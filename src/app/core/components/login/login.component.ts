import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../../service/notify.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private notification: ToastrService
  ) {
    
   }

  ngOnInit(): void {
  }
  navigate(){
    this.router.navigate([''])
    this.notification.success('login efetuado',  'Sucesso!!!')
  }

}
