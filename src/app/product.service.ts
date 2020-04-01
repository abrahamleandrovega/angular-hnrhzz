import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class ProductService {
  constructor(private http: HttpClient){
  }
  get(){
    return this.http.get('https://fipo.alwaysdata.net/api/products.json​​',{});
  }
}