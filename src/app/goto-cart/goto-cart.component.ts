import { Component, OnInit } from '@angular/core';
import { books } from '../homepage/interface';
import { CartsService } from '../carts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goto-cart',
  templateUrl: './goto-cart.component.html',
  styleUrls: ['./goto-cart.component.css']
})
export class GotoCartComponent implements OnInit {
  cartItems: any = [];
  shippingCharge: number = 15;
  Iprice: number = 0;

  constructor(private cartService: CartsService ,private router:Router) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((Items) => {
      this.cartItems = Items;
      this.cartItems.map((item:any)=>item.Quantity =1);
      this.calculateTotalCost();
    });
  }

  removeCart(item: books) {
    this.cartService.removeFromCart(item).subscribe((res) => {
      console.log(res);
      this.loadCartItems();
    });
  }

  updateCount(bookId: number, increment: boolean, item: any) {
    
    
    if (increment) {
      item.Quantity++;
    } else {
      if (item.Quantity > 1) {
        item.Quantity--;
      }
    }
    console.log(item.Quantity);
    
    this.calculateTotalCost();
  }

  calculateTotalCost(): number {
    let total = 0;
  
    if (this.cartItems.length > 0) {
      this.cartItems.forEach((item: any) => {
        let price = parseFloat(item.price.replace('$', '')); 
        total += price * item.Quantity;
      });
    }
  
    return this.shippingCharge + total;
  }
  // proceedToCheckout(){
  //   this.router.navigate(['/checkout'], {
  //     queryParams: {
  //       cartItems: JSON.stringify(this.cartItems),
  //       totalCost: this.calculateTotalCost()
  //     }
  //   });
  // }
  
  
}
