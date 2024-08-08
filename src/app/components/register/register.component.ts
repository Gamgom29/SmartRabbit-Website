import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  constructor(private _FormBuilder:FormBuilder , private _AuthService:AuthService , private _Router:Router){}
  Data:FormData = new FormData();
  registerForm!:FormGroup;
  ngOnInit(){
    this.createForm();
  }
  createForm(){
    this.registerForm= this._FormBuilder.group({
      name: ['' , [Validators.required]],
      email: ['',[Validators.required , Validators.email]],
      phone: ['' , [Validators.required]],
      password:['' , [Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
      passwordConfirm:['',Validators.required], 
      nationalId:['', Validators.required], 
      nationalIdPhotoFace:['',Validators.required], 
      nationalIdPhotoBack:['',Validators.required], 
      taxNumberPhoto:['',Validators.required], 
      taxNumber:['',Validators.required],  
      productType:['',Validators.required], 
    });
  }
  handleForm(){
    const formData = new FormData();
    Object.entries(this.registerForm.value).forEach(([key,value]:any)=>{
      formData.append(key,value);
    });
      this._AuthService.register(formData).subscribe({
        next:res=>{
          console.log(res);
          this._Router.navigate(['/login']);
        },error:err=>{
          console.log(err);
        }
      });
  }

  getPhotos(event:any){
    const name:string = event.target.attributes.id.nodeValue;
    const file = event.target.files[0];
    this.registerForm.get(name)?.setValue(file);
  }
}
