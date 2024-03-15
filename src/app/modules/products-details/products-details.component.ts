import { Component, OnInit, inject,  } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { ReletedProductService } from '../../core/services/releted-product.service';
import {Product } from '../../core/interface/product';





@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [
    RouterModule,
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,


  
  ],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent implements OnInit {

  productData: any | Product;
  reletedProd : any
  private breakpointObserver = inject(BreakpointObserver);
  private activatedRoute = inject(ActivatedRoute);
  private service = inject(ProductService);


  constructor(private http: ReletedProductService){}



 ngOnInit(): void {
  let productId = this.activatedRoute.snapshot.paramMap.get('productId')
  productId && this.service.productsGetId(productId).subscribe((res) =>{
    this.productData =res;
  })
}

cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  map(({ matches }) => {
    if (matches) {
      return [
        { title: 'Card 1', cols: 1, rows: 1 },

      ];
    }

    return [
      { title: 'Card 1', cols: 1, rows: 1 },

    ];
  })
);
pCards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  map(({ matches }) => {
    if (matches) {
      return [
        { title: 'Card 1', cols: 1, rows: 1 },

      ];
    }

    return [
      { title: 'Card 1', cols: 1, rows: 1 },

    ];
  })
);

}
