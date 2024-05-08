import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  users(){
    return [
      {name:"Alok", age:22, email:"alokpandey6386561331@gmail.com"},
      {name:"Alok", age:22, email:"alokpandey6386561331@gmail.com"},
      {name:"Alok", age:22, email:"alokpandey6386561331@gmail.com"},
      {name:"Alok", age:22, email:"alokpandey6386561331@gmail.com"},

    ]
  }
}
