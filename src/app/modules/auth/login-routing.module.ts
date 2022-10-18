import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceHolderService } from 'src/app/core/services/place-holder.service';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

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
