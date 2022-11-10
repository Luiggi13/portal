
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChristmasComponent } from './christmas.component';

const routes: Routes = [
  { path: '',
    component: ChristmasComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChristmasRoutingModule { }
