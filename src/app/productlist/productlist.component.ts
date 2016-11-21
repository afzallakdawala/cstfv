import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'
import {  Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html'
})
export class ProductlistComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) {}

  errorMessage: string;
  products: Array < any > = [];
  mode = 'Observable';

  getProductData() {
    this.appService.getProducts()
      .subscribe(
        products => this.products = products,
        error => this.errorMessage = < any > error);
  }

  ngOnInit() {
    this.getProductData();
  }

  productDetailPage(product) {
    this.router.navigate(['/product', product.productId]);
  }

}