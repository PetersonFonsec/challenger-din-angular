import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Output() prev: EventEmitter<any> = new EventEmitter();
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() goToPage: EventEmitter<any> = new EventEmitter();
  @Input() allPages: number;
  @Input() currentPage: number = 1;
  pages: number[];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.pages = Array(this.allPages).fill(0);
    }, 100);
  }

  _prev() {
    this.prev.emit();
  }

  _next() {
    this.next.emit();
  }

  showIndex(index: number): boolean {
    return (
      index === this.currentPage || index + 1 === this.allPages || index === 0
    );
  }

  _goToPage(index: number): void {
    this.goToPage.emit(index);
  }
}
