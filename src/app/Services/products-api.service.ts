import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  // 4.	Create new Product Service that contains the following methods:
  // d.	Create any required Models.
  // e.	You’ll need to import HttpClientModule in app.module, and use HttpClient service in your service.
  productsList: IProduct[] = [];
  constructor(private httpclient: HttpClient) {}

  // a.	getAllProducts() that returns array of all products (Use GET API: http://localhost:3000/products ).
  getAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.baseAPIURL}/products`
    );
  }

  // b.	getProductsByCategoryID(catID) that returns array of products of the given category (Use API: http://localhost:3000/products?CategoryID=cid)
  getProductsByCategoryID(catID: any): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.baseAPIURL}/products?categoryID=${catID}`
    );
  }

  // c.	getProductByID(pID) that returns product with the given prdID (Use GET API: http://localhost:3000/products/pid ).
  getProductByID(pID: any): Observable<IProduct> {
    return this.httpclient.get<IProduct>(
      `${environment.baseAPIURL}/products/${pID}`
    );
  }

  /// sortByPrice
  sortByPrice(value: string): Observable<IProduct[]> {
    let orderBy = value == 'down' ? 'desc' : 'asc';
    return this.httpclient.get<IProduct[]>(
      `${environment.baseAPIURL}/products/?_sort=price&_order=${orderBy}`
    );
  }
  /// searchForProducts
  searchForProducts(value: string): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.baseAPIURL}/products?name=${value}`
    );
  }
  /// Add New Product
  addNewProduct(product: IProduct): Observable<IProduct[]> {
    return this.httpclient.post<IProduct[]>(
      `${environment.baseAPIURL}/products`,
      product
    );
  }
  /// Edit Product
  editProduct(pID: any, product: IProduct): Observable<IProduct[]> {
    return this.httpclient.patch<IProduct[]>(
      `${environment.baseAPIURL}/products/${pID}`,
      JSON.stringify(product),
      {
        headers: {
          'Content-Type': 'Application/json',
        },
      }
    );
  }
  /// Delete Product
  deleteProduct(pID: any): Observable<IProduct[]> {
    return this.httpclient.delete<IProduct[]>(
      `${environment.baseAPIURL}/products/${pID}`
    );
  }
}
