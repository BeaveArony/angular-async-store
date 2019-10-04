import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncStoreService } from 'src/app/async-store.service';
import { DataService, Product } from 'src/app/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [AsyncStoreService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  constructor(
    private dataService: DataService,
    public store: AsyncStoreService<Product[]>
  ) {}

  ngOnInit() {
    this.store.handleSubscription(this.dataService.getProducts());
  }
}
