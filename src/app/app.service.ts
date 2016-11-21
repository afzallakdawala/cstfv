import { Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private productListUrl = 'https://api.myjson.com/bins/2ex3q';
  products: Array < any > = []
  constructor(private http: Http) {}

  getProducts(): Observable < any > {
    return this.http.get(this.productListUrl).map(this.extractData).catch(this.handleError);
  }

  getProductById(id: String) {
    return this.getProducts().map(products => products.filter(product => product.productId === id)[0]);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.products || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}