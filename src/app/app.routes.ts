import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsDetailsComponent } from './modules/products-details/products-details.component';
import { ProductsComponent } from './modules/products/products.component';


export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'details/:productId', component: ProductsDetailsComponent},
    {path:'products/:productId', component: ProductsComponent},
    {path: '',   redirectTo: '/home', pathMatch: 'full' }
    
];
