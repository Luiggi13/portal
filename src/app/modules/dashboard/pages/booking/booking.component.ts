import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit{
  MONTH_NAMES = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];
  DAYS = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie'];
  days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie'];
  // DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  showDatepicker = true;
  datepickerValue!: string;
  month!: number; // !: mean promis it will not be null, and it will definitely be assigned
  year!: number;
  no_of_days = [] as number[];
  blankdays = [] as number[];
  selectedDay!: number;
  selectedClass = 'is-selected';

  constructor() {}
  ngOnInit(): void {
    this.initDate();
    this.getNoOfDays();
  }

  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.datepickerValue = new Date(this.year, this.month, today.getDate()).toDateString();
  }

  isToday(date: any) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);
    return today.toDateString() === d.toDateString() ? true : false;
  }

  getDateValue(date: any) {
    if (this.isSaturDayOrSunday(date) === 0) return;
    
    let selectedDate = new Date(this.year, this.month, date);
    this.datepickerValue = selectedDate.toDateString();
    this.selectedDay === date ? this.selectedDay = 0 : this.selectedDay = date;
  }

  getNoOfDays() {
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

    // find where to start calendar day of week
    let dayOfWeek = new Date(this.year, this.month).getDay();
    console.log(dayOfWeek)
    let blankdaysArray = [];
    for (var i = 2; i <= dayOfWeek; i++) {
      blankdaysArray.push(i)
    }

    let daysArray: number[] = [];
    for (var i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
    
  }

  trackByIdentity = (index: number, item: any) => item;

  isSaturDayOrSunday(numberDay: number): number {
    const d = new Date(this.year, this.month,numberDay).getDay()
    if ( d === 6 || d === 0 ) return 0
    
    return numberDay;
  }
}
