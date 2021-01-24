import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() id: String;
  @Input() type: String;
  @Input() size: String;
  @Input() color: String;
  @Input() disabled: Boolean;

  constructor() { }
}
