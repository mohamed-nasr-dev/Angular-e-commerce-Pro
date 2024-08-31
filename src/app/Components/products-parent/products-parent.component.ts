import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.scss'],
})
export class ProductsParentComponent {
  filteredBy: number = 0;
  sortBy: string = '';
  search: string = '';
  prodId: number = 0;
  card: string = '';
  ProductCart: IProduct[] = [];
  addToCart(products: any) {
    // console.log("From parent"+products);
    this.ProductCart = products;
  }
  removeThisFromCart(prod: IProduct) {
    this.ProductCart = this.ProductCart.filter((item) => item.id != prod.id);
    this.prodId = prod.id;
  }
  sort() {
    this.sortBy = this.sortBy == 'up' ? 'down' : 'up';
  }
}
