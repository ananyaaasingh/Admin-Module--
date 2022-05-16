import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  users = JSON.parse(localStorage.getItem('userData') || '[]')
  i = JSON.parse(localStorage.getItem('keyValue'))

  constructor() { }

  ngOnInit(): void {
  }

  name = this.users[this.i].name

 
}
