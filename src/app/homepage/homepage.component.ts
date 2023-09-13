import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../book-api.service';

import { books } from './interface';
import { CartsService } from '../carts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  
  getDetails: books[] = [];
  searchQuery: string = '';
  filteredBooks: books[] = [];
  selectedBook: books[]=[];

  constructor(public b: BookApiService, private cartService: CartsService, private router: Router) {}



  bookdetailsData() {
    console.log("sahith");
    this.b.getData().subscribe((details: any) => {
      if (details) {
        console.log(details);
        
        this.getDetails = details;
        
        console.log(this.getDetails);
        
        
        
      }
    });
  }
 


 addCart(item:books){
  return this.cartService.addToCart(item).subscribe(()=>{
    console.log(item);
    
  })
 }

  goToCheckout(book: books) {
    this.router.navigate(['/buynow', book.id]);
  }

  searchBooks() {
   console.log(this.getDetails);
   
      

      this.filteredBooks = this.getDetails.filter(book =>book.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
  
      
      
      console.log(this.searchQuery);
      
      console.log(this.filteredBooks);

  }
  // changeBook(event:any){
  //   let bookTypes= event.target.value;
  //   this.filteredBooks = this.getDetails.filter(book =>book.title.toLowerCase().includes(bookTypes.toLowerCase()));
 
  //  }

  ngOnInit() {
   this.bookdetailsData(); 
  }
}

