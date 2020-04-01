import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products

  constructor(private productService: ProductService){
        productService.get().subscribe(res => {
        this.products = res['objects'];
    });
  }
  ascSort($event){
    if(this.products){
      this.products.sort(function(a,b){
        var priceA = parseFloat(a.price),
         priceB = parseFloat(b.price);

         if(priceA < priceB)return -1;
         if(priceA > priceB)return  1;
         return 0;
      });
    }
  }
    descSort($event){
    if(this.products){
      this.products.sort(function(a,b){
        var priceA = parseFloat(a.price),
         priceB = parseFloat(b.price);

         if(priceA > priceB)return -1;
         if(priceA < priceB)return  1;
         return 0;
      });
    }
  }
}
