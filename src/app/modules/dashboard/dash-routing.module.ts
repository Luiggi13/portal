
import { BookingComponent } from './pages/booking/booking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash.component';

const routes: Routes = [
  { path: '',
    component: DashComponent,
    children: [
      { path: '',   
        pathMatch: 'full',
        component: BookingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
