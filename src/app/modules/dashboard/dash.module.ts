import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlaceHolderService } from 'src/app/core/services/place-holder.service';

import { DashboardRoutingModule } from './dash-routing.module';
import { BookingComponent } from './pages/booking/booking.component';
import { DashComponent } from './dash.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookingComponent,
    DashComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    IconsModule,
    SharedModule
  ],
  providers: [
    HttpClientModule,
    PlaceHolderService
  ]
})
export class DashModule { }
