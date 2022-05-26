import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListsComponent } from './pages/lists/lists.component';

const routes: Routes = [

  { path: '', component: DashboardComponent },

  { 
    path: 'category', children: [
      { path: '', component: CategoryComponent },
      { path: ':id', component: CategoryComponent }
    ]
  },

  { path: 'cart', component: CartComponent },

  { path: 'lists', component: ListsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
