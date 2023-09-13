import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  reg:FormGroup
  
  arr:{uname: string;emailid: string;password:string}[]=[]

  constructor(private bookApiService:BookApiService){ 
    this.reg = new FormGroup({
      uname:new FormControl(null, [Validators.required,Validators.minLength(8)]),
      emailid:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmPassword :new FormControl(null,[Validators.required,]),
      mobileNumber:new FormControl(null,[Validators.required,Validators.minLength(10)]),
      gender:new FormControl(),
      subscribe:new FormControl()
    },this.pswrdMatch)
  }
  pswrdMatch(rg:any){
    let password = rg.controls['password'].value
    let ConfirmPassword = rg.controls['confirmPassword'].value

    if(password == ConfirmPassword){
      return null
    }
    else{
      rg.get('confirmPassword').setErrors({ pswrdMatch: true });
      return{

        'pswrdMatch':true

      }
      
    }

  }

  show(){
    console.log(this.reg);
    
  }
  data() {
    if (this.reg.valid) {
      const formData = {
        uname: this.reg.controls['uname'].value,
        emailid: this.reg.controls['emailid'].value,
        password :this.reg.controls['password'].value,
        confirmPassword :this.reg.controls['confirmPassword'].value,
        mobileNumber:this.reg.controls['mobileNumber'].value
  
      };
      this.arr.push(formData);
      console.log(this.arr);
      this.bookApiService.registerUser(formData).subscribe(
        (response) => {
          `registration successfull`
          alert("registration succesfull")
          console.log('Registration successful:', response);
        },
        (error) => {
          console.error( error);
        }
      );
 
    }

  } 
  reset(){
    this.reg.reset()
  }

}
