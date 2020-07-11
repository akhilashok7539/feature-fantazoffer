import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  view(){
    this.router.navigate(['/viewshops']);
  }
}
