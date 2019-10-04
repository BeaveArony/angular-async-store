import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardUiComponent } from './user-card-ui.component';

describe('UserCardUiComponent', () => {
  let component: UserCardUiComponent;
  let fixture: ComponentFixture<UserCardUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
