import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { of, throwError, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export interface User {
  id: string;
  name: string;
  userName: string;
  avatar: string;
  email: string;
  dob: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phrase: string;
  buzz: string;
  website: string;
  company: { name: string; catchPhrase: string; bs: string };
}

export interface Product {
  id: string;
  color: string;
  department: string;
  productName: string;
  price: string;
  productAdjective: string;
  productMaterial: string;
  product: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  products: Product[];

  constructor() {
    this.users = this.generateUsers();
    this.products = this.generateProducts();
  }

  getUsers(limit = Number.POSITIVE_INFINITY) {
    return getObs(this.users.filter((user, i) => i < limit));
  }

  getUser(id: string) {
    return getObs(this.users.find(user => user.id === id));
  }

  getProducts(limit = Number.POSITIVE_INFINITY) {
    return getObs(this.products.filter((user, i) => i < limit));
  }

  getProduct(id: string) {
    return getObs(this.products.find(product => product.id === id));
  }

  private generateUsers() {
    return new Array(20).fill(null).map((item, i) => this.contextualCard(i));
  }

  private contextualCard(id: number): User {
    const name = faker.name.findName();
    const userName = faker.internet.userName(name);
    return {
      id: id.toString(10),
      name,
      userName,
      avatar: faker.internet.avatar(),
      email: faker.internet.email(userName),
      dob: faker.date.past(
        50,
        new Date('Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)')
      ),
      phone: faker.phone.phoneNumber(),
      address: {
        street: faker.address.streetName(true),
        suite: faker.address.secondaryAddress(),
        city: faker.address.city(),
        zipcode: faker.address.zipCode(),
        geo: {
          lat: faker.address.latitude(),
          lng: faker.address.longitude()
        }
      },
      website: faker.internet.domainName(),
      phrase: faker.hacker.phrase(),
      buzz: faker.company.bsBuzz(),
      company: {
        name: faker.company.companyName(),
        catchPhrase: faker.company.catchPhrase(),
        bs: faker.company.bs()
      }
    };
  }

  private generateProducts() {
    return new Array(20).fill(null).map((item, i) => this.commerce(i));
  }

  private commerce(id: number): Product {
    return {
      id: id.toString(10),
      color: faker.commerce.color(),
      department: faker.commerce.department(),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(),
      productAdjective: faker.commerce.productAdjective(),
      productMaterial: faker.commerce.productMaterial(),
      product: faker.commerce.product(),
      image: faker.internet.avatar()
    };
  }
}

function getObs<R>(data: R): Observable<R> {
  return of(data).pipe(
    delay(Math.random() * 1000 + 200),
    tap(() => {
      if (Math.random() > 0.8) {
        console.warn('Throwing Error');
        throw new Error('Random Error');
      }
    })
  );
}
