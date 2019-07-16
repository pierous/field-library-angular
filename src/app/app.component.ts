import { Component } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';

export const a = {
  nombre: ['required', ['maxLength', 10]],
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'field-lib-app';

  public form1: FormGroup;

  constructor(
    public fb: FormBuilder
  ) {
    this.createValidationObject();
    this.form1 = this.fb.group({
      nombre: [false, [Validators.required, Validators.maxLength(10)]],
      apellido1: [],
      // apellido2: ['Sobrino'],
      // color: ['primary'],
    });
  }

  private createValidationObject() {
    Object.values(a).forEach(item => {
      item.forEach(validator => {
        if (validator instanceof Array) {
          validator.forEach(parameter => {
            console.log(parameter);
          });
        } else {
          console.log(validator);
        }
      });
    });
  }

}
