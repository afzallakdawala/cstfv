import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AppService }  from '../app.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product:Array<any> = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let id = params['id'];
       console.log(this.appService.getProduct(id).subscribe(product => this.product = product));
       this.appService.getProduct(id).subscribe(product => this.product = product);
    });
  }
}
