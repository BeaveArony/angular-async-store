import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCardComponent } from './async-card.component';

describe('AsyncCardComponent', () => {
  let component: AsyncCardComponent;
  let fixture: ComponentFixture<AsyncCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
