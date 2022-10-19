import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, ErrorFormService } from 'src/app/core/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-recovery',
  templateUrl: './form-recovery.component.html',
  styleUrls: ['./form-recovery.component.scss']
})
export class FormRecoveryComponent {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public alertService: AlertService,
    public errorFormService: ErrorFormService
  ) {
    this.form = fb.group<any>({
      password: ['', Validators.required],
      validator_password: ['', Validators.required]
    }, {validators: this.passwordConfirmingValidator})
  }

  get f() { return this.form.controls; }

  passwordConfirmingValidator(c: AbstractControl): { invalid: boolean } {
    if (c.get('password')?.value !== c.get('validator_password')?.value) {
        return {invalid: true};
    }
    return {invalid: false};
  }

  isSamePassword() {
    if (this.form.invalid) {
      if(this.f['password'].value !== this.f['validator_password'].value) {
        this.form.invalid.valueOf();
        return this.alertService.error('Password and Confirmed Password must match!')
      }
        return;
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.isSamePassword();
  }
}
