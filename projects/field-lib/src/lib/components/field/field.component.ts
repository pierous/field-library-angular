// Angular
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input()
  public label: string;
  @Input()
  public value: string;
  @Input()
  public iconPrefix: string;
  @Input()
  public iconSuffix: string;

  constructor() { }

  ngOnInit() {
  }

}
