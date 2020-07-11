import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedin = false;
  userDetails: string;
  userName: any;
  name: any;
  location: any = 'choose your location';

  constructor(private router:Router) { }

  ngOnInit() {
    this.isLoggedin = JSON.parse(localStorage.getItem('isLoggedIN'));
    if(this.isLoggedin == null)
    {
      this.isLoggedin = false;
    }
    if(this.isLoggedin == true)
    {
      this.userDetails = JSON.parse(localStorage.getItem('userDetais'));
      this.userName = this.userDetails['username'];
      this.name   = this.userName.substring(0, this.userName.lastIndexOf("@"));
      this.location = localStorage.getItem('location');
      // console.log(this)
      if(this.location == null)
      {
        this.location = 'choose your location';
      }
    }
  }
  logout()
  { 
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
