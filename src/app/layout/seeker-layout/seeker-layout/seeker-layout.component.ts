import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seeker-layout',
  templateUrl: './seeker-layout.component.html',
  styleUrls: ['./seeker-layout.component.css']
})
export class SeekerLayoutComponent implements OnInit {
userName: string;
  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("SeekerUser").toString();
  }

}
