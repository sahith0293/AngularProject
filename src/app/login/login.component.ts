import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string ='';
  password: string | undefined;
  showForgotPassword: boolean = true;

  constructor(private router: Router, private bookApiService: BookApiService) {}

  login() {
    console.log(this.username);
    console.log(this.password);
    if (this.username && this.password) {
      this.bookApiService.getUserByUsername(this.username).subscribe(
        (users) => {
          console.log(users);
          let isUserValid = users.some((user: any) => user.password === this.password);
          console.log(isUserValid);

          if (isUserValid) {
            console.log('Logged in successfully');
           
            sessionStorage.setItem('loggedInUser', this.username);
            this.router.navigate(['/homepage']);
          } else {
            console.log('Invalid username or password');
              const p = "Invalid password"
              alert("invalid username or password")
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert("Username and password are required");
    }
  }
  

  google() {
    window.open('https://www.google.co.in/', '_blank');
  }
}
