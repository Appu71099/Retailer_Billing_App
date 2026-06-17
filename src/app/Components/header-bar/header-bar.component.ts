import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  role: string;
  avatarUrl?: string;
}

@Component({
  selector: 'app-header-bar',
  imports: [CommonModule, ],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {

  @Input() title: string = 'My Retail Shop';
  @Input() hasNotifications: boolean = true;
  @Input() user: User = {
    name: 'Admin User',
    role: 'Administrator'
  };

  constructor(private router: Router) {}

  onLogout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
