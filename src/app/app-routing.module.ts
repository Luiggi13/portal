import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'dash',
    loadChildren: () => import('./modules/dashboard/dash.module').then(m => m.DashModule)
  },
  { path: 'christmas',
    loadChildren: () => import('./modules/christmas/christmas.module').then(m => m.ChristmasModule)
  },
  { path: 'christmas-new',
  loadChildren: () => import('./modules/christmas2/christmas-new.module').then(m => m.ChristmasNewModule)
  },
  { path: '**',
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
