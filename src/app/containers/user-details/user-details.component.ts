import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { AsyncStoreService } from 'src/app/async-store.service';
import { DataService, User } from 'src/app/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [AsyncStoreService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;

  constructor(
    private dataService: DataService,
    public store: AsyncStoreService<User>
  ) {}

  ngOnInit() {
    this.store.handleSubscription(id => this.dataService.getUser(id));
  }
}
