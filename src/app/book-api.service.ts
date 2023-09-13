import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { books } from './homepage/interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  
  constructor(public http:HttpClient) { }
  registeredUsers: { uname: string; password: string }[] = [];

  getData() {
    return this.http.get('http://localhost:3000/books');
  }
  registerUser(userData: any) {
    return this.http.post('http://localhost:4500/userdetails', userData);
  }
  getUserByUsername(username: string) {
    return this.http.get<any>(`http://localhost:4500/userdetails?uname=${username}`);
  }
  // getHarryBook(){
  //   return this.http.get('http://localhost:3000/HarryPotter')
  // }

}
