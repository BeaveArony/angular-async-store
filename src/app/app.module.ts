import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { ProductDetailsComponent } from './containers/product-details/product-details.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { AsyncPageComponent } from './components/async-page/async-page.component';
import { AsyncCardComponent } from './components/async-card/async-card.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorCardComponent } from './components/error-card/error-card.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { UserCardUiComponent } from './components/user-card-ui/user-card-ui.component';
import { DashboardUsersComponent } from './containers/dashboard-users/dashboard-users.component';
import { DashboardProductsComponent } from './containers/dashboard-products/dashboard-products.component';
import { ProductCardUiComponent } from './components/product-card-ui/product-card-ui.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
];
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    ProductDetailsComponent,
    ProductListComponent,
    DashboardComponent,
    AsyncPageComponent,
    AsyncCardComponent,
    ErrorCardComponent,
    ListItemComponent,
    UserCardUiComponent,
    DashboardUsersComponent,
    DashboardProductsComponent,
    ProductCardUiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
