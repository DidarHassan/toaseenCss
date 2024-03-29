import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs'
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from '../../../../core/services/category.service';
import { RouterModule} from '@angular/router';
import {} from '../../../../core/interface/product'






@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    CarouselModule,
    RouterModule

  ]
})
export class CategoryComponent implements OnInit {
  ngOnInit(): void {
    this.getCate();
  }
  private categoryhttp = inject(CategoryService)
  private breakpointObserver = inject(BreakpointObserver);


  getCategory: any;
  products: any;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 1 },

        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },

      ];
    })
  );

  category: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: false,
    autoplayTimeout: 7500,
    dots: false,
    autoplaySpeed:1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
  }
 
 getCate(){
  this.categoryhttp.cateGet().subscribe({
    next: (getCategory : any) =>{
      this.getCategory = getCategory
    }
  })
}
// getProducts(){
//   this.productshttp.productsGet().subscribe({
//     next: (products: any) => {
//       this.products = products;
//     }
//   })
// }

}
