import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-user-card-ui',
  templateUrl: './user-card-ui.component.html',
  styleUrls: ['./user-card-ui.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardUiComponent implements OnInit {
  @Input() userName: string;
  @Input() avatar: string;
  @Input() name: string;
  @Input() dob: string;
  @Input() catchPhrase: string;
  @Input() phrase: string;
  @Input() phone: string;
  @Input() email: string;
  @Input() street: string;
  @Input() suite: string;
  @Input() zipcode: string;
  @Input() city: string;

  constructor() {}

  ngOnInit() {}
}
