import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  id: number; 

  constructor(private service: CustomerService,
    private route: ActivatedRoute) {
    route.params.subscribe(p => {
      this.id = +p['id'];
    });
   }

  ngOnInit() {
    this.service.getProductsByCategory(this.id)
      .subscribe(p => this.products = p);
  }

}
