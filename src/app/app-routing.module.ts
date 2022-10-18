import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth',
    loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule)
  },
  { path: '**',
    redirectTo: 'auth/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
