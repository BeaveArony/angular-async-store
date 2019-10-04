import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncStoreService } from 'src/app/async-store.service';
import { DataService, User } from 'src/app/data.service';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css'],
  providers: [AsyncStoreService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardUsersComponent implements OnInit {
  constructor(
    private dataService: DataService,
    public store: AsyncStoreService<User[]>
  ) {}

  ngOnInit() {
    this.store.handleSubscription(this.dataService.getUsers(3));
  }
}
