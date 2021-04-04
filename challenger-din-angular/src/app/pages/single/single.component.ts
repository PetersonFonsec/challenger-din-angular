import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  subscription: Subscription;
  name = '';
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.router.params.subscribe((a) => {
      console.log(a);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
