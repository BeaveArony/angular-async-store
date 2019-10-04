import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { AsyncStoreService } from 'src/app/async-store.service';
import { DataService, Product } from 'src/app/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [AsyncStoreService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {
  @Input() user: Product;

  constructor(
    private dataService: DataService,
    public store: AsyncStoreService<Product>
  ) {}

  ngOnInit() {
    this.store.handleSubscription(id => this.dataService.getProduct(id));
  }
}
