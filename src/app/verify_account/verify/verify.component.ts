import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  activationCode: string;
  activationMassage: string;

  constructor(private route: Router, private service: AuthService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.router.params.subscribe(p => {
      this.activationCode = p['ActivationCode'];
      if(this.activationCode != null)
      {
        this.service.activateAccount(this.activationCode).subscribe(result=>{
          this.activationMassage=result;
                })
      }  
    }); 
  }

  loginForm()
      {
    this.route.navigate(['Login']);
    }

}
