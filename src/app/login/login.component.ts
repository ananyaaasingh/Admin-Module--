import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email : any
  password : any
  showData : boolean
  

  constructor(private authService: AuthService, private router : Router ) { }

  ngOnInit(): void {
  }

  
  onlogin(): void{ 
  if(this.authService.check(this.email, this.password)){
  localStorage.setItem('key1', "true")
  this.showData = JSON.parse(sessionStorage.getItem('showValue'))
  console.log(this.showData)  
  if(this.showData){
   this.router.navigateByUrl('/admin')
  }
  else 
  {
    this.router.navigateByUrl('/user-dashboard')
  }
  }

  else{
    alert("login failed")
  }
    }

}

