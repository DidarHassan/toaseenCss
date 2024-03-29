import { Component } from '@angular/core';
import {  SlidersComponent} from '../../shared/components/sliders/banner/sliders.component';
import {  CategoryComponent} from '../../shared/components/sliders/category/category.component';
import {  GridCardComponent} from '../../shared/components/grid-card/grid-card.component';
import {  TabsComponent} from '../../shared/components/tabs/tabs.component';
import {  BannerComponent} from '../../shared/components/banner/banner.component';
import {  RecommendedProductsComponent} from '../../shared/components/sliders/recommended-products/recommended-products.component';
import {  FooterComponent} from '../../shared/components/layout/footer/footer.component';






@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SlidersComponent,
    CategoryComponent,
    GridCardComponent,
    TabsComponent,
    BannerComponent,
    RecommendedProductsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
