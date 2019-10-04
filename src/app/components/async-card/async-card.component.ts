import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-async-card',
  templateUrl: './async-card.component.html',
  styleUrls: ['./async-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncCardComponent implements OnInit {
  @Input() title: string | null = 'Title';
  @Input() loading = false;
  @Input() errorMessage: string | null = null;

  constructor() {}

  ngOnInit() {}
}
