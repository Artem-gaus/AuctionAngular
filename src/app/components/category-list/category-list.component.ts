import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

}
