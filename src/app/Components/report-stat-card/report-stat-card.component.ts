import { Component, Input } from '@angular/core';
import { ReportStat } from '../../Pages/reports/reports.component';

@Component({
  selector: 'app-report-stat-card',
  imports: [],
  templateUrl: './report-stat-card.component.html',
  styleUrl: './report-stat-card.component.css'
})
export class ReportStatCardComponent {
 @Input({ required: true }) data!: ReportStat;
}
