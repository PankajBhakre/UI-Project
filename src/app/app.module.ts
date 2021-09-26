import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './registration/register-user/register-user.component';
import { CommonModule, DatePipe } from '@angular/common';
import { CustomMaterialModule } from './material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { AuthService } from './shared/auth.service';
import { VerifyComponent } from './verify_account/verify/verify.component';
import { SeekerLayoutComponent } from './layout/seeker-layout/seeker-layout/seeker-layout.component';
import { SeekerLogoutComponent } from './logout/seeker-logout/seeker-logout/seeker-logout.component';
import { UserProfileComponent } from './seeker/user-profile/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginComponent,
    VerifyComponent,
    SeekerLayoutComponent,
    SeekerLogoutComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CustomMaterialModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
