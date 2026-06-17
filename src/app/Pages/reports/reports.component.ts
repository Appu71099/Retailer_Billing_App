import { Component, signal } from '@angular/core';
import {DateRangeFilterComponent} from "../../Components/date-range-filter/date-range-filter.component";
import {ReportStatCardComponent} from "../../Components/report-stat-card/report-stat-card.component";

export interface ReportStat {
  icon: string;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
  trend: string;
  trendType: 'positive' | 'negative';
}

type DateRangeOption = 'Today' | 'This Week' | 'This Month' | 'This Year';

const REPORT_STATS: ReportStat[] = [
  {
    icon: 'dollar',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    label: 'Total Revenue',
    value: '₹222,940',
    trend: '+12.5% from last period',
    trendType: 'positive'
  },
  {
    icon: 'bag',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-500',
    label: 'Total Orders',
    value: '705',
    trend: '+8.2% from last period',
    trendType: 'positive'
  },
  {
    icon: 'box',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-500',
    label: 'Items Sold',
    value: '2220',
    trend: '+15.3% from last period',
    trendType: 'positive'
  },
  {
    icon: 'trend',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
    label: 'Avg Order Value',
    value: '₹316',
    trend: '+4.1% from last period',
    trendType: 'positive'
  }
];

@Component({
  selector: 'app-reports',
  imports: [DateRangeFilterComponent, ReportStatCardComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

   selectedRange = signal<DateRangeOption>('Today');
  reportStats = signal(REPORT_STATS);

  onRangeChange(range: DateRangeOption) {
    this.selectedRange.set(range);
    // TODO: refetch reportStats, dailySales, topProducts based on new range
  }

  onExport() {
    // TODO: trigger report export (PDF/CSV generation)
  }
}
