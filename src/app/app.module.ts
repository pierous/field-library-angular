// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Librerias
// import { FieldLibModule } from 'field-lib';

// Componentes
import { AppComponent } from './app.component';
import { FieldLibModule } from 'projects/field-lib/src/lib/field-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FieldLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
