// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
} from '@angular/material';

// Components
import { FieldComponent } from './components/field/field.component';
import { InputComponent } from './components/field/input/input.component';
import { SelectComponent } from './components/field/select/select.component';

@NgModule({
  declarations: [
    FieldComponent,
    InputComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [
    FieldComponent,
    InputComponent,
    SelectComponent,
    // MatIconModule,
    MatInputModule,
    // MatFormFieldModule,
  ]
})
export class FieldLibModule { }
