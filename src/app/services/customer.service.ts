import { Customer } from './../models/customer';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: Http) { }

  getCustomer(id: number) {
    return this.http.get('http://localhost:60446/api/customers/' + id)
      .pipe(map(res => res.json()));
  }
}
