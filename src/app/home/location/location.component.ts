import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  data = [
    {"name":"Alappuzha"},
    {"name":"Haripad"},
    {"name":"Erankaulam"},
    {"name":"Kochi"},
    {"name":"kannur"},
    {"name":"Kollam"},
    {"name":"kozhikode"},
    {"name":"Palakad"},
    {"name":"pattanamtitta"},

  ];
  searchString:any;
  location: any;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  card(data){
    console.log(data.name)
    this.location = data.name;
    localStorage.setItem('location',this.location)
    this.router.navigate(['/Home'])
  }
}
