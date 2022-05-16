import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  val : string =''
  private users : Array<any> = [];
  isRegister : boolean = false;
  userData : any
  registerForm = this.formbuilder.group({
    name : ['',[ Validators.required, Validators.minLength(3)]],
    email : [''],
    number : [''],
    password : [''],
    imagePath : ['']
  });
  
  register: any;
  

onSubmit(): void{
  this.isRegister = true
  this.users = JSON.parse(localStorage.getItem("userData") || "[]");
  this.users.push(this.registerForm.value);
  localStorage.setItem('key','false')
  localStorage.setItem('userData', JSON.stringify(this.users));
  this.router.navigateByUrl('/login')
  alert("successfully registered")
}

  constructor(private formbuilder: FormBuilder, private router : Router) { 
    this.loadImg()
  }


  loadImg(){
   
    if( this.registerForm.value.email){
      
      this.url = JSON.parse(localStorage.getItem(this.registerForm.value.email) || '[]');
    }
  }
  ngOnInit(): void {
  }
  get f() {
    return this.registerForm.controls;
  }

  url  = "./assets/profile.png";

  onSelectFile(e : any){
  if(e.target.files){
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event:any) =>{
      this.url = event.target.result;
      this.val = JSON.stringify(reader.result);
      localStorage.setItem(this.registerForm.value.email, this.val);
    }
  }
  }


}





