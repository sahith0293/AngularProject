import { Injectable } from '@angular/core';
import { books } from './homepage/interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private router:Router,private http:HttpClient) { }


  addToCart(item: books) {
    return this.http.post('http://localhost:3000/carts',item)
    console.log(item);
    
  }

  getCartItems() {
    return this.http.get('http://localhost:3000/carts');
    
  }
  removeFromCart(item: books) {
    const url = `http://localhost:3000/carts/${item.id}`;
    return this.http.delete(url);
  }
}
