import { Customer } from './../models/customer';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: Http) { }

  getCustomer(id: number) {
    return this.http.get('http://localhost:60446/api/customers/' + id)
      .pipe(map(res => res.json()));
  }

  getProductsByCategory(id: number) {
    return this.http.get('http://localhost:60446/api/products/category/' + id)
      .pipe(map(res => res.json()));
  }

  getCategories() {
    return this.http.get('http://localhost:60446/api/productcategories')
      .pipe(map(res => res.json()));
  }
  getProducers() {
    return this.http.get('http://localhost:60446/api/producers')
      .pipe(map(res => res.json()));
  }

  createProduct(product: Product) {
    return this.http.post('http://localhost:60446/api/products', product)
      .pipe(map(res => res.json()));
  }
}
