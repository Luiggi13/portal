import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<any>();

    constructor() {}

    OnAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string) {
        this.subject.next({ type: 'success', text: message });
    }

    error(message: string) {
        console.log('mensaje sserv',message)
        this.subject.next({ type: 'error', text: message });
    }

}
