import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncStoreService } from 'src/app/async-store.service';
import { DataService, User } from 'src/app/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [AsyncStoreService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  constructor(
    private dataService: DataService,
    public store: AsyncStoreService<User[]>
  ) {}

  ngOnInit() {
    this.store.handleSubscription(this.dataService.getUsers());
  }
}
