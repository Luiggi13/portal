import { AlertComponent } from './alert.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [SharedModule],
    declarations: [
        AlertComponent
    ],
    exports: [
        AlertComponent
    ]
})
export class AlertModule { }
