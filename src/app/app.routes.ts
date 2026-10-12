import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products-grid/products-grid').then((m) => m.ProductsGrid),
  },
  {
    path: 'my-wishlist',
    loadComponent: () => import('./pages/my-whishlist/my-whishlist').then((m) => m.MyWhishlist),
  },
];
