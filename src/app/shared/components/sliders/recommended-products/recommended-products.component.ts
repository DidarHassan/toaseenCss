import { Component, inject } from '@angular/core';
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
@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    CarouselModule
  ],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.scss'
})
export class RecommendedProductsComponent {
  private breakpointObserver = inject(BreakpointObserver);

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

  reProGrid = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 1 },

        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 1', cols: 1, rows: 1 },

      ];
    })
  );

  customOptions: OwlOptions = {
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
        items:2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }

  category: any = [
    {
      title: 'didar',
      name: 'hassan'
    },
    {
      title: 'didar',
      name: 'hassan'
    },
    {
      title: 'didar',
      name: 'hassan'
    },
    {
      title: 'didar',
      name: 'hassan'
    },
    {
      title: 'didar',
      name: 'hassan'
    },
    {
      title: 'didar',
      name: 'hassan'
    }
    
  ]

}
