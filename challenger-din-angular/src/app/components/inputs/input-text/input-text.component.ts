import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  @Input() type: string;
  @Input() error: boolean | null;
  @Input() name: string;
  @Input() id: string;
  @Input() success: boolean;
  @Input() required: boolean;
  @Input() placeholder: string;
  @Input() icon: string | null;
  val = '';

  constructor() {
    this.error = false;
  }

  onChange: any = () => {};

  onTouch: any = () => {};

  ngOnInit(): void {}

  get value(): string {
    return this.val;
  }

  set value(val) {
    if (val !== undefined && val !== null) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
