import { CustomerService } from './services/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

const router: Routes = [
  { path: 'api/customers/:id', component: CustomerListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
