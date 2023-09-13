import { Component } from '@angular/core';
import { CartsService } from '../carts.service';
import { books } from '../homepage/interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartItem: any = [];
  
  loggedInUser: string | null = null;
  constructor(public cartService: CartsService,private router: Router) {
    this.loggedInUser = sessionStorage.getItem('loggedInUser');
  }
 
  ngOnInit() {
    
    this.cartService.getCartItems().subscribe(
      (cartItems) => {
        this.cartItem = cartItems;
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }
  signout() {
    
    this.router.navigate(['/login']); 
  }
}
