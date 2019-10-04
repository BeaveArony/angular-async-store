import { Component, OnInit } from '@angular/core';
import { DataService, Product, User } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'component-async-state-management';
  users: User[];
  products: Product[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.users = this.dataService.getUsers();
    // this.products = this.dataService.getProducts();
  }
}
