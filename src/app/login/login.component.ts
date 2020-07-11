import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  mobNo: any;
  password: any;
  isLoggedin = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mobNo:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required]
      });
      this.isLoggedin = JSON.parse(localStorage.getItem('isLoggedIN'));
      if(this.isLoggedin == null)
      {
        this.isLoggedin = false;
      }
      if(this.isLoggedin == true)
      {
        this.router.navigate(['/Home'])
      }
  }
  // get f() { return this.loginForm.controls; }

  userLogin(){
    // if (this.loginForm.invalid) {
    //   this.submitted = true;
    // }
    // else if(this.loginForm.valid)
    // {
      let req = {
        "username":this.mobNo,
        "password":this.password
      }
      localStorage.setItem('userDetais',JSON.stringify(req));
      localStorage.setItem('isLoggedIN','true');
      this.router.navigate(['/Home']);
    }
   
    
  // }
}
