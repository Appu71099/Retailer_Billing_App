import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-side-bar',
  imports: [RouterModule,CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

   navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'grid', route: '/dashboard' },
    { label: 'Billing',   icon: 'dollar', route: '/dashboard/billing' },
    { label: 'Products',  icon: 'box', route: '/dashboard/products' },
    { label: 'Reports',   icon: 'file', route: '/dashboard/reports' },
    // { label: 'Settings',  icon: 'cog', route: '/dashboard/settings' },
  ];
}
