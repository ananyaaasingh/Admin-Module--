import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.route.navigateByUrl('/register')
  }

  onLogin(){
    this.route.navigateByUrl('/login')
  }

  onLogout(){
    sessionStorage.clear()
    localStorage.setItem('key1' , JSON.stringify(false))
    this.route.navigateByUrl('/login')
  }

}
