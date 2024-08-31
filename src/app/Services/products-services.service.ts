import { Injectable } from '@angular/core';
import { IProduct, Offer } from '../Models/iproduct';
@Injectable({
  providedIn: 'root',
})
export class ProductsServicesService {
  //   a.	In the service add these functions (Depending on the classes you created before):
  // i)	getProductsByCatID(catID): Products []
  // ii)	getProductByID(prodID): Product
  productsList: IProduct[] = [];
  Discount: Offer = Offer.offer1;
  constructor() {
    this.productsList = [];
  }
  getAllProducts() {
    return this.productsList;
  }
  searchForProducts(searchKeyword: string): IProduct[] {
    return this.productsList.filter((product) =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }
  filterByCategoryID(categoryID: number): IProduct[] {
    return this.productsList.filter(
      (product) => product.categoryID == categoryID
    );
  }
  getProductByID(prdID: number): IProduct | undefined {
    return this.productsList.find((prd) => prd.id == prdID);
  }
  sortByPrice(value: string): IProduct[] {
    switch (value) {
      case 'up':
        return this.productsList.sort((a, b) => a.price - b.price);

      case 'down':
        return this.productsList.sort((a, b) => b.price - a.price);

      default:
        return this.productsList;
    }
  }
}
