import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeekerLayoutComponent } from './layout/seeker-layout/seeker-layout/seeker-layout.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterUserComponent } from './registration/register-user/register-user.component';
import { UserProfileComponent } from './seeker/user-profile/user-profile/user-profile.component';


const routes: Routes = [
  {
    path: 'Seeker',
    component: SeekerLayoutComponent,
    children: [
      { path: 'UserProfile', component: UserProfileComponent  },
     // { path: 'Education', component: EducationDetailsComponent , canActivate: [SeekerAuthGuardService]  },
    //   { path: 'Company', component: CompanyDetailsComponent , canActivate: [SeekerAuthGuardService]  },
     //  { path: 'EditProfile', component: EditUserProfileComponent , canActivate: [SeekerAuthGuardService]  },
       //{ path: 'JobListDetails', component: SeekerJobDetailsComponent , canActivate: [SeekerAuthGuardService]  },
    //   { path: 'UploadResume', component: UploadResumeComponent , canActivate: [SeekerAuthGuardService]  },
    //   { path: 'ChnagePassword', component: ChnagePasswordComponent , canActivate: [SeekerAuthGuardService]  },
    //   { path: 'ProsDetails', component: ProfessionalDetailsComponent , canActivate: [SeekerAuthGuardService]  }
    ]
  },
  { path: 'Registration', component: RegisterUserComponent },
  { path: 'Login', component: LoginComponent },
  { path: '', redirectTo: "Login", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
