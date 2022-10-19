import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorFormService } from 'src/app/core/services';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, public errorFormService: ErrorFormService) {
    this.form = fb.group({
      username: ['', Validators.nullValidator],
      password: ['', Validators.nullValidator]
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
  }
}
