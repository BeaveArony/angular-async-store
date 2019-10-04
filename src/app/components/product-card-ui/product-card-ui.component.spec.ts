import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardUiComponent } from './product-card-ui.component';

describe('ProductCardUiComponent', () => {
  let component: ProductCardUiComponent;
  let fixture: ComponentFixture<ProductCardUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
