import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  ApiUrl = "https://backend.didarhasan.xyz";

  private http = inject(HttpClient);

  constructor() { }

  cateGet(): Observable<any> {
    return this.http.get(this.ApiUrl + "/category/get")
  };
}
