import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'field-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends InputComponent {

  constructor() {
    super();
  }

}
