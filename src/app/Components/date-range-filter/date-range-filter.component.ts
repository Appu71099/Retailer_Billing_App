import { Component, Input, Output, EventEmitter } from '@angular/core';


type DateRangeOption = 'Today' | 'This Week' | 'This Month' | 'This Year';
@Component({
  selector: 'app-date-range-filter',
  imports: [],
  templateUrl: './date-range-filter.component.html',
  styleUrls: ['./date-range-filter.component.css']
})
export class DateRangeFilterComponent {
 

   @Input({ required: true }) selected!: DateRangeOption;
  @Output() rangeChange = new EventEmitter<DateRangeOption>();

  ranges: DateRangeOption[] = ['Today', 'This Week', 'This Month', 'This Year'];

  onSelect(range: DateRangeOption) {
    this.rangeChange.emit(range);
  }
}
