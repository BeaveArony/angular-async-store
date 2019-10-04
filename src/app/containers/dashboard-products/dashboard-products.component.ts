import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService, User, Product } from 'src/app/data.service';
import { AsyncStoreService } from 'src/app/async-store.service';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.css'],
  providers: [AsyncStoreService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardProductsComponent implements OnInit {
  constructor(
    private dataService: DataService,
    public store: AsyncStoreService<Product[]>
  ) {}

  ngOnInit() {
    this.store.handleSubscription(this.dataService.getProducts(3));
  }
}
