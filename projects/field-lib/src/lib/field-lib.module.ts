// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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

const MyComponents = [
  FieldComponent,
  InputComponent,
  SelectComponent,
];

@NgModule({
  declarations: [
    FieldComponent,
    InputComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [
    MyComponents,
    ReactiveFormsModule,
    // MatIconModule,
    MatInputModule,
    // MatFormFieldModule,
  ]
})
export class FieldLibModule { }
