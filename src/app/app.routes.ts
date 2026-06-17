import { Routes } from '@angular/router';

export const routes: Routes = [

{   path:'',
    redirectTo:'/login',
    pathMatch:'full'
},
{
    path:'login',
    loadComponent: () => import('./auth/user-login/user-login.component').then(m => m.UserLoginComponent), 
    data: { title: 'Login' }
},
{
    path:'dashboard',
    loadComponent: () => import('./Pages/dashboard/dashboard.component').then(m => m.DashboardComponent), 
    data: { title: 'Dashboard' } ,
    children: [
        {
            path:'',
            loadComponent: () => import('./Pages/dashboard-pages/dashboard-pages.component').then(m => m.DashboardPagesComponent),
            data: { title: 'Dashboard Home' }
        },
        {
            path:'billing',
            loadComponent: () => import('./Pages/billing/billing.component').then(m => m.BillingComponent),
            data: { title: 'Billing' }
        },
        {
            path:'products',
            loadComponent: () => import('./Pages/products/products.component').then(m => m.ProductsComponent),
            data: { title: 'Products' }
        },
        {
            path:'reports',
            loadComponent: () => import('./Pages/reports/reports.component').then(m => m.ReportsComponent),
            data: { title: 'Reports' }
        },
        {
            path:'settings',
            loadComponent: () => import('./Pages/settings/settings.component').then(m => m.SettingsComponent),
            data: { title: 'Settings' }
        }
    ]
}
];
