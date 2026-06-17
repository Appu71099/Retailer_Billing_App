import { Component } from '@angular/core';
import { SideBarComponent } from "../../Components/side-bar/side-bar.component";
import { HeaderBarComponent } from "../../Components/header-bar/header-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SideBarComponent, HeaderBarComponent,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
