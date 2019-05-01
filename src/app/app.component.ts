import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    this.form1 = this.fb.group({
      nombre: ['David'],
      apellido1: [],
      apellido2: ['Sobrino'],
    });
  }

}
