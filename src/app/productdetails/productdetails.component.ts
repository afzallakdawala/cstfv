import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService }  from '../app.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
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
       this.appService.getProductById(id).subscribe(product => this.product = product);
    });
  }
}
