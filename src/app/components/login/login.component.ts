import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private _FormBuilder:FormBuilder , private _AuthService:AuthService , private _Router:Router){}
  Data:FormData = new FormData();
  loginForm:FormGroup = this._FormBuilder.group({
    phone:['', Validators.required],
    password:['', Validators.required],
  });

  handleForm(){
    if(this.loginForm.valid){
      this._AuthService.login(this.loginForm.value).subscribe({
        next:res=>{
          console.log(res);
          this._Router.navigate(['/home']);
        },
        error:err=>{
          console.log(err);
        }
      });
    }
  }
}

