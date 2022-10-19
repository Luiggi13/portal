import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    component: AuthComponent,
    children: [
      { path: '',
        pathMatch: 'full',
        component: LoginComponent
      },
      { path: 'recovery',
        pathMatch: 'full',
        component: RecoveryComponent
      },
      { path: '*',
        redirectTo: '/auth'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
