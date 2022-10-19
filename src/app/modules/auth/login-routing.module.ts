import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    component: AuthComponent,
    children: [
      { path: 'login',
        component: LoginComponent
      },
      { path: 'recovery',
        component: RecoveryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
