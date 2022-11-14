import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'christmas',
    loadChildren: () => import('./modules/christmas/christmas.module').then(m => m.ChristmasModule)
  },
  { path: '**',
    redirectTo: 'christmas'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
