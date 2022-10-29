import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorFormService } from 'src/app/core/services';

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
  roomSelected = 'videowall';
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, public errorFormService: ErrorFormService) {
    this.form = this.fb.group({
      comment: [null, Validators.required]
    })
  }
  
  ngOnInit(): void {
    this.initDate();
    this.getNoOfDays();
  }

  get f() { return this.form.controls; }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.form.valid);
    
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
  }

  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.datepickerValue = new Date(this.year, this.month, today.getDate()).toDateString();
    this.selectedDay = 0;
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

  changeRoom(event: Event ) {
    const room = (event.target as HTMLInputElement).value
    this.roomSelected = room.split(' -')[0].toLowerCase();
  }
}
