import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileform:FormGroup;
  isLoggedin = false;
  userDetails: any;
  username: any;
  firstname: any;
  lstname: any;
  mobNo: any;
  profile: any;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.profileform = this.formBuilder.group({
      mobNo:['',Validators.required],
      firstname: ['', Validators.required],
      lstname: ['', Validators.required],
      username: ['', Validators.required]

      });
      this.isLoggedin = JSON.parse(localStorage.getItem('isLoggedIN'));
      if(this.isLoggedin == null)
      {
        this.isLoggedin = false;
      }
      if(this.isLoggedin == true)
      {
        this.userDetails = JSON.parse(localStorage.getItem('userDetais'));
        this.username = this.userDetails['username'];
        this.profile = JSON.parse(localStorage.getItem('userDetailss'));
        if(this.profile != null)
        {
        this.username = this.profile['username'];
        this.firstname = this.profile['firstname'];
        this.lstname = this.profile['lstname'];
        this.mobNo = this.profile['mobNo'];
        

        }
      }
  }
  create(){
    let req = {
      "username":this.username,
      "firstname":this.firstname,
      "lstname":this.lstname,
      "mobNo":this.mobNo,

    }
    localStorage.setItem('userDetailss',JSON.stringify(req));

  }
}
