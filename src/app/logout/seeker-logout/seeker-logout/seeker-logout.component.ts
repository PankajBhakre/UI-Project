import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seeker-logout',
  templateUrl: './seeker-logout.component.html',
  styleUrls: ['./seeker-logout.component.css']
})
export class SeekerLogoutComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('SeekerUser');
    this.route.navigate(['Login']);
  }

}
