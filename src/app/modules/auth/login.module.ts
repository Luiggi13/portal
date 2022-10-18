import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlaceHolderService } from 'src/app/core/services/place-holder.service';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRecoveryComponent } from './components/form-recovery/form-recovery.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecoveryComponent,
    FormLoginComponent,
    FormRecoveryComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [
    HttpClientModule,
    PlaceHolderService
  ]
})
export class LoginModule { }
