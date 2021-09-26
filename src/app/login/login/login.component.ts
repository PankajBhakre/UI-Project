import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';
import { Login } from 'src/app/shared/register.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName: string;
  rUserName: string;
  password: string;
  public loginModel: Login;
  actionButtonLabel: string = 'Retry';
  action: boolean = false;
  setAutoHide: boolean = true;
  autoHide: number = 4000;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  display = 'none';
  constructor(
    private router: Router,
    private service: AuthService,
    private toastr: ToastrService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginModel = new Login();
    this.loginModel.UserName = this.userName;
    this.loginModel.Password = this.password;
    this.service.validateLoginUser(this.loginModel).subscribe((response) => {
      if (response == '0') {
        let config = new MatSnackBarConfig();
        config.duration = this.setAutoHide ? this.autoHide : 0;
        config.verticalPosition = this.verticalPosition;
        this.snackBar.open(
          'Invalid Username and Password',
          this.action ? this.actionButtonLabel : undefined,
          config
        );

        this.router.navigate(['Login']);
      }
      if (response == 'Admin') {
        let config = new MatSnackBarConfig();
        config.duration = this.setAutoHide ? this.autoHide : 0;
        config.verticalPosition = this.verticalPosition;
        this.snackBar.open(
          'Logged in Successfully',
          this.action ? this.actionButtonLabel : undefined,
          config
        );
        this.router.navigate(['/Admin/Country']);
      }

      if (response == 'Recruiter') {
        let config = new MatSnackBarConfig();
        config.duration = this.setAutoHide ? this.autoHide : 0;
        config.verticalPosition = this.verticalPosition;
        this.snackBar.open(
          'Logged in Successfully',
          this.action ? this.actionButtonLabel : undefined,
          config
        );
        this.router.navigate(['/Recruiter/JobPost']);
      }
      if (response == 'Seeker') {
        let config = new MatSnackBarConfig();
        config.duration = this.setAutoHide ? this.autoHide : 0;
        config.verticalPosition = this.verticalPosition;
        this.snackBar.open(
          'Logged in Successfully',
          this.action ? this.actionButtonLabel : undefined,
          config
        );
        this.router.navigate(['/Seeker/UserProfile']);
      }
    });
  }
  register() {
    this.router.navigate(['Registration']);
  }

  openModalDialog() {
    this.display = 'block';
  }
  closeModalDialog() {
    this.display = 'none';
  }

  Send() {}
}
