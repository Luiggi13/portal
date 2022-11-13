import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment'
import { UserChristmas, UserService } from '../../shared/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Timer {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

@Component({
  selector: 'app-christmas',
  templateUrl: './christmas.component.html',
  styleUrls: ['./christmas.component.scss']
})
export class ChristmasComponent implements OnInit {
  form: FormGroup;
  message = 'Usuario añadido correctamente'
  showMessage = false;
  isError = false
  interval: any;
  endTime!:Timer;
  eventDay = moment("2022-12-24");
  second = 1000;
  minute = this.second * 60;
  hour = this.minute * 60;
  day = this.hour * 24;
  give = ['Toby','Pete','Ricky','Jack','Dan Collins','Anthony','Nick','Chris','Solomon','Krystian','Dave','Paul','Ryan','Daniel R','Christian'];
  isSubmited = false;
  receive = this.give.concat();
  options: any[] = [];
  users: UserChristmas[] = [];
  constructor(private router: Router, private userSrv: UserService, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [null, Validators.required]
    });
    this.endTime = {
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0'
    }
    this.interval = setInterval(this.countDownFn, this.second);
  }
  ngOnInit(): void {
    this.form.markAllAsTouched();
console.log(this.form.get('email')?.errors)
    this.drawList();
    this.getAllUsers();
  }

  countDownFn = () => {
    const today = moment();
    const timeSpan = this.eventDay.diff(today);

    if (timeSpan <= -today) {
        console.log("Unfortunately we have past the event day");
        clearInterval(this.interval);
        return;
    } else if (timeSpan <= 0) {
        console.log("Today is the event day");
        clearInterval(this.interval);
        return;
    } else {
        const days = Math.floor(timeSpan / this.day);
        const hours = Math.floor((timeSpan % this.day) / this.hour);
        const minutes = Math.floor((timeSpan % this.hour) / this.minute);
        const seconds = Math.floor((timeSpan % this.minute) / this.second);

        // Set results
        this.endTime.days = this.setZeros(String(days));
        this.endTime.hours = this.setZeros(String(hours));
        this.endTime.minutes = this.setZeros(String(minutes));
        this.endTime.seconds = this.setZeros(String(seconds));
    }
};

  setZeros = (value: string): string => value.length === 1 ? `0${value}` : value;
  changePage = () => this.router.navigate(['/christmas-new']);

  drawList()
  {
    for (var i = this.give.length - 1; i >= 0; i--) {
      this.options.push({
        value: i,
        innerHtml: this.give[i]
      })
    }
  }

  submit() {
    if(!this.form.valid || !this.isEmailValid(this.form.get('email')?.value)) {
      this.isError = true;
      this.message = 'Debes introducir un email válido';
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
      return;
    };
    this.postUser(this.form.get('email')?.value);
  }

  back() {
    this.isSubmited = false;
  }

  getAllUsers() {
    this.userSrv.getUsers().subscribe({
      next: (result) => {
        this.users = result;
      },
      error: (err) => console.log(err)
    });
  }

  postUser(email: string) {
    const user: UserChristmas = { email }
    if(this.isRegistered(email)) {
      this.isError = true;
      this.message = 'El usuario ya existe';
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
      return;
    };
    this.isSubmited = true;
    this.userSrv.setUser(user).subscribe({
      next: (result) => {
        if(result.length) this.getAllUsers();
        this.form.reset();
        this.isError = false;
        this.message = 'Usuario añadido correctamente';
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 2000);
      },
      error: (err) => console.log(err)
    });
  }

  isRegistered(email: string): boolean {
    // this.form.controls['email'].touched
    return this.users.some(item=> item.email === email);
  }

  isEmailValid(email: string): boolean {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(email);

    return result
  }
}
