import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public Country=[];
  public State=[];
  public City=[];
  registerForm: FormGroup;
  imageUrl: string;
  userNameAvailable:boolean;
  constructor(private service: AuthService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.imageUrl = '../assets/profile.png';
    this.GetCountry();
    this.registerForm = this.fb.group({
      RegType: ['', [Validators.required]],  
      FirstName: ['', [Validators.required, Validators.minLength(3)]],  
      LastName: ['', [Validators.required]],  
      Image: [''],  
      EmailId: ['', [Validators.required,Validators.email]],  
      PinCode: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6)]],  
      PersonalNumber: ['', [Validators.required]],  
      UserName:['', [Validators.required]],   
      CountryId: ['', [Validators.required]],  
      StateId: ['', [Validators.required]],  
      CityId: ['', [Validators.required]],  
      Address: ['',[Validators.required]],  
      Password: ['', [Validators.required]],
      ConfPassword:  ['', [Validators.required]], 
      DateOfBirth: ['', [Validators.required]],  
      Gender: ['', [Validators.required]]
    })
  }

  GetCountry(){
    this.service.getAllCountry().subscribe((result) => {
      this.Country = result;
    })
  }

  BindState(countryId){
 this.service.getAllState(countryId).subscribe((result) => {
   this.State = result;
 })
  }
  BindCity(stateId){
    this.service.getAllState(stateId).subscribe((result) => {
      this.City = result;
    })
     }

     onSelectFile(file : FileList){

     }

     onFormSubmit(form){

     }
     resetForm() {  
      this.registerForm.reset();  
    }  
    CheckUserName(userName){

    }
    loginForm(){

    }

    public checkError = (controlName: string, errorName: string) => {
      return this.registerForm.controls[controlName].hasError(errorName);
    }
}
