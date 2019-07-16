// Angular
import { Component, ContentChild, ViewChild, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

// Material
import { MatFormFieldControl, MatFormField } from '@angular/material';

// Componentes
import { FieldComponent } from '../field.component';

@Component({
  selector: 'field-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends FieldComponent {

  @ContentChild(MatFormFieldControl) 
  public _control: MatFormFieldControl<any>;
  @ViewChild(MatFormField)
  private _matFormField: MatFormField;

  @Input()
  public edit: boolean;

  private required: boolean;

  constructor() {
    super();
    this.edit = false;
  }

  ngOnInit() {
    const self = this;
    if (this._matFormField) {
      this._matFormField._control = this._control;
      const init = this._control.stateChanges.subscribe(data => {
        self.required = self._control.ngControl.control.validator({} as AbstractControl) !== null;
        init.unsubscribe();
      });
    }
  }

}
