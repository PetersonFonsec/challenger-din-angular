import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() id: String;
  @Input() type: String;
  @Input() size: String;
  @Input() color: String;
  @Input() disabled: Boolean;
  classes: string = 'button ';
  constructor() {}

  ngOnInit(): void {
    this.classes += `${this.color} ${this.size}`;
  }
}
