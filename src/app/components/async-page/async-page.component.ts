import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-async-page',
  templateUrl: './async-page.component.html',
  styleUrls: ['./async-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPageComponent implements OnInit {
  @Input() loading = false;
  @Input() errorMessage: string | null = null;

  constructor() {}

  ngOnInit() {}
}
