import { CustomerService } from './services/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';

const router: Routes = [
  { path: '', redirectTo: 'api/home', pathMatch: 'full' },
  { path: 'api/home', component: HomeComponent },
  { path: 'api/product', component: ProductComponent },
  { path: 'api/customers/:id', component: CustomerListComponent },
  { path: 'api/categories', component: CategoryListComponent },
  { path: 'api/productsbycategory/:id', component: ProductsListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CategoryListComponent,
    ProductsListComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpModule,
    FormsModule 
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
