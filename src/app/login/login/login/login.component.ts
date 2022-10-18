import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  constructor(private fb:FormBuilder)  {
    this.form = fb.group({
      username:  ['',Validators.nullValidator],
      password:  ['',Validators.nullValidator]
    })
  }

  onSubmit() {
    if (this.form.controls['username'].value === 'ttt' && this.form.controls['password'].value === '888888') {
      alert('logged')
    }
  }
}
