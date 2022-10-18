import { AlertService } from 'src/app/core/services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageAlert } from 'src/app/core/models';
import { Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
    private subscription!: Subscription;
    message!: MessageAlert | null;

    constructor(private alertService: AlertService) {
    }
    ngOnInit(): void {
        this.subscription = this.alertService.OnAlert()
            .pipe(throttleTime(2000))
            .subscribe(message => {
                console.log('mensaje componente',message)
                switch (message && message.type) {
                    case 'success':
                        message.cssClass = 'alert-success';
                        break;
                    case 'error':
                        message.cssClass = 'alert-danger';
                        break;
                }
                this.message = message;
                setTimeout(() => {
                    this.message = null;
                }, 2000);
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
