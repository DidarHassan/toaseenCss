import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProduct(productId: string | null) {
    throw new Error('Method not implemented.');
  }
  ApiUrl = "https://backend.didarhasan.xyz";

  private http = inject(HttpClient);

  constructor() { }

  productsGet(): Observable<any> {
    return this.http.get(this.ApiUrl + "/products/get")
  };
  
  productsGetId(id: string): Observable<any> {
    return this.http.get(this.ApiUrl + "/products/getProductId/" +id )
  }
  imageGet(): Observable<any> {
    return this.http.get(this.ApiUrl + "/images/get")
  };

}


