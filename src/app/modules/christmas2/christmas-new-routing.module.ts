
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChristmasNewComponent } from './christmas-new.component';


const routes: Routes = [
  { path: '',
    component: ChristmasNewComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChristmasNewRoutingModule { }
