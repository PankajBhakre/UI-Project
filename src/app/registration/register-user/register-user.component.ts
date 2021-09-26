import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  public Country = [];
  public State = [];
  public City = [];
  registerForm: FormGroup;
  imageUrl: string;
  userNameAvailable: boolean;
  fileToUpload: File = null;
  imageName: string;
  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private datepipe: DatePipe,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.imageUrl = '../assets/profile.png';
    this.GetCountry();
    this.registerForm = this.fb.group({
      RegType: ['', [Validators.required]],
      FirstName: ['', [Validators.required, Validators.minLength(3)]],
      LastName: ['', [Validators.required]],
      Image: [''],
      EmailId: ['', [Validators.required, Validators.email]],
      PinCode: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
      PersonalNumber: ['', [Validators.required]],
      UserName: ['', [Validators.required]],
      CountryId: ['', [Validators.required]],
      StateId: ['', [Validators.required]],
      CityId: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ConfPassword: ['', [Validators.required]],
      DateOfBirth: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
    });
  }

  GetCountry() {
    this.service.getAllCountry().subscribe((result) => {
      this.Country = result;
    });
  }

  BindState(countryId) {
    this.service.getAllState(countryId).subscribe((result) => {
      this.State = result;
    });
  }
  BindCity(stateId) {
    console.log(stateId);
    this.service.getAllCity(stateId).subscribe((result) => {
      this.City = result;
      console.log('City Name:', result);
    });
  }

  onSelectFile(file: FileList) {
    this.fileToUpload = file.item(0);
    this.imageName = file.item(0).name;

    //show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };

    reader.readAsDataURL(this.fileToUpload);
  }

  onFormSubmit(formData) {
    if (this.registerForm.invalid) {
      return;
    }

    let formImageData = new FormData();
    formImageData.append('Image', this.fileToUpload);
    // let formData = this.registerForm.value;
    this.service.UploadImage(formImageData).subscribe((result) => {
      formData.Image = this.imageName;
      formData.DateOfBirth = this.datepipe.transform(
        formData.DateOfBirth,
        'MM/dd/yyyy'
      );
    });

    if (formData != null && formData.RegType != null) {
      this.service.createData(formData).subscribe((result) => {
        this.toastr.success('Registration Success', result);
        this.registerForm.reset();
      });
    }
  }

  resetForm() {
    this.registerForm.reset();
  }

  CheckUserName(userName) {
    debugger;
    this.service.CheckExistUser(userName).subscribe((result) => {
      this.userNameAvailable = result;
    });
  }

  loginForm() {
    this.router.navigate(['Login']);
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  };
}
