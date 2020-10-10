import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() name: string;
  @Input() error: string;
  @Input() required: string | boolean;

  constructor() {
  }

  onChange: any = () => {
  }

  onTouch: any = () => {
  }

  set value(val) {
    this.onChange(val)
    this.onTouch(val)
  }

  writeValue(value: any) {
    this.value = value
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }
}
