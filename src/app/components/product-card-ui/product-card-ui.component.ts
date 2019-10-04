import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-product-card-ui',
  templateUrl: './product-card-ui.component.html',
  styleUrls: ['./product-card-ui.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardUiComponent implements OnInit {
  @Input() color: string;
  @Input() department: string;
  @Input() productName: string;
  @Input() price: string;
  @Input() productAdjective: string;
  @Input() productMaterial: string;
  @Input() product: string;
  @Input() image: string;

  constructor() {}

  ngOnInit() {}
}
