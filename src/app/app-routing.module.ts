import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartsService } from './carts.service';
import { GotoCartComponent } from './goto-cart/goto-cart.component';
import { BuynowComponent } from './buynow/buynow.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path : 'homepage', component :HomepageComponent},
  { path : 'goto-cart',component:GotoCartComponent},
  { path : "buynow/:id", component:BuynowComponent}

  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
