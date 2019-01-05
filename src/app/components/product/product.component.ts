import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { Producer } from 'src/app/models/producer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
categories: Category[];
producers: Producer[];
product: Product = {
  id: 0,
  title: '',
  description: '',
  productCategoryId: 0,
  producerId: 0,
  sellerId: 1
};

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.getCategories()
      .subscribe(categories => this.categories = categories);
    this.service.getProducers()
      .subscribe(p => this.producers = p);
  }

  submit() {
    this.service.createProduct(this.product)
      .subscribe(x => console.log(x));
  }

}
