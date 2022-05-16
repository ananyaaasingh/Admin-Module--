import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http : HttpClient) {}

 

    postData(data : any){
      return this.http.post<any>('http://localhost:3000/posts',data)
      .pipe(map((res : any) => {
        return res;
      }))
    }

      getData(){
        return this.http.get<any>('http://localhost:3000/posts')
        .pipe(map((res : any) => {
          return res;
        }))

    
  }

  getQuest(id){
    const url = 'http://localhost:3000/posts/' + id;
    return this.http.get<any>(url)
    .pipe(map((res : any) => {
      return (res);
    }))

}

  updateData(data: any, id:number){
    return this.http.put<any>('http://localhost:3000/posts/' + id,data)
    .pipe(map((res : any) => {
      return res;
    }))

}


 deleteData(id:number){
  return this.http.delete<any>('http://localhost:3000/posts/' + id)
  .pipe(map((res : any) => {
    return res;
  }))
 }

  isValid!: boolean;
  indexValue: number = -1;
  registerData: any;
  showFullData : boolean = false

  check(email: any, password: any) {
    this.registerData = JSON.parse(localStorage.getItem('userData') || "[]");
    for (const i in this.registerData) {

      if(
        email === "admin@gmail.com" &&
        password === "admin"
      ){
        this.isValid = true
        this.showFullData = true
        sessionStorage.setItem('showValue', JSON.stringify(this.showFullData))
        return true
      }

      else if(
        email == this.registerData[i].email &&
        password == this.registerData[i].password
      ) {
        this.isValid = true
        this.showFullData = false
        this.indexValue = parseInt(i)
        localStorage.setItem('keyValue', JSON.stringify(this.indexValue))
        sessionStorage.setItem('showValue', JSON.stringify(this.showFullData))
        return true
      }
  }
  return false
}

}

