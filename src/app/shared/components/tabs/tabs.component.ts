import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../../../core/services/product.service'
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductsPipe } from '../../pipes/products.pipe';


@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    MatTabsModule,
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    RouterOutlet,
    ProductsPipe,

    
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  products: any;
  imagesGet: any;
  @Input() imgSliders: any;
  constructor(private http: ProductService,) { }

  ngOnInit(): void {
    this.post();
    this.getAllProducts();
  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 4, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
      ];
    })
  );

  post() {
    this.http.productsGet().subscribe({
      next: (products: any) => {
        this.products = products;
      }
    })
  }
  getAllProducts() {
    this.http.imageGet().subscribe({
      next: (imagesGet: any) => {
        this.imagesGet = imagesGet;
      }
    })
  }

}
