import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment'

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
  interval: any;
  endTime!:Timer;
  eventDay = moment("2022-12-24");
  second = 1000;
  minute = this.second * 60;
  hour = this.minute * 60;
  day = this.hour * 24;
  constructor() {
    this.endTime = {
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0'
    }
    this.interval = setInterval(this.countDownFn, this.second);
  }
  ngOnInit(): void {
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
}
