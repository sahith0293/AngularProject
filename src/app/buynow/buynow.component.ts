import { Component, OnInit } from '@angular/core';
import { books } from '../homepage/interface';
import { ActivatedRoute } from '@angular/router';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent  implements OnInit{
  public currentBuy :any;
  shippingAddress: string = '';
  selectedPaymentMode: string = 'creditCard';
  cartItems: any[] = []; 
  shippingCharge:number=90;
  public id :any;
  constructor(private paramRoute:ActivatedRoute , private bookapi :BookApiService) {
    
  }
  ngOnInit(): void {
    this.paramRoute.params.subscribe((params)=>{
      console.log(params);
      
      this.id=params['id'];
      console.log(this.id);
     if(this.id){
      this.bookapi.getData().subscribe((res:any)=>{
        this.currentBuy = res.filter((ele:any)=>ele.id ==this.id)
   console.log(this.currentBuy);
         
      })
     }   
    })
  }
  calculateTotalCost() {
    let currentBuyPriceWithDollar = this.currentBuy[0].price.split('');    
    currentBuyPriceWithDollar.shift();
    let gg = currentBuyPriceWithDollar.join('');        
    let total =  parseFloat(gg) + this.shippingCharge;    
    return  "$" +total;
  }
  

  placeOrder() {
    alert("order placed")
    
    console.log('Order placed!');
  }

}
