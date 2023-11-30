import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page/dashboard/dashboard.component').then(
      m => m.DashboardComponent
    ),
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    redirectTo: '',
  },
  {
    path: 'products',
    loadComponent: () => import('./page/product/product.component').then(
      m => m.ProductComponent
    ),
    canActivate: [authGuard],
  },
  {
    path: 'product/edit/:id',
    loadComponent: () => import('./page/product-editor/product-editor.component').then(
      m => m.ProductEditorComponent
    ),
    canActivate: [authGuard],
  },
  {
    path: 'customers',
    loadComponent: () => import('./page/customer/customer.component').then(
      m => m.CustomerComponent
    ),
    canActivate: [authGuard],
  },
  {
    path: 'customer/edit/:id',
    loadComponent: () => import('./page/customer-editor/customer-editor.component').then(
      m => m.CustomerEditorComponent
    ),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./page/login/login.component').then(
      m => m.LoginComponent
    ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
