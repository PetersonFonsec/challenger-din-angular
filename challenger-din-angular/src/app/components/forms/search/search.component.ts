import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  search = '';
  constructor() {}

  ngOnInit(): void {}

  _submit() {
    this.submit.emit(this.search);
  }
}
