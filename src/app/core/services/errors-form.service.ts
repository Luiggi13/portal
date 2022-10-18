import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorFormService {

  constructor() { }

  conditionalClass(submitted: boolean, field: ValidationErrors | null) {
    if (submitted && field) {
      return 'is-invalid form-validator'
    }
    return null;
  }
}
