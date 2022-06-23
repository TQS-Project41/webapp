import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListsComponent } from './pages/lists/lists.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [

  { path: '', component: DashboardComponent },

  { 
    path: 'category', children: [
      { path: '', component: CategoryComponent },
      { path: ':id', component: CategoryComponent }
    ]
  },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'cart', component: CartComponent },

  { path: 'lists', component: ListsComponent },

  { path: 'orders', component: OrdersComponent },

  { path: 'addresses', component: AddressesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
