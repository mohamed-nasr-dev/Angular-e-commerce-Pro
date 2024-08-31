import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  product: IProduct = {} as IProduct;

  // productSchema: any = [
  //   {
  //     name: 'name',
  //     type: 'text',
  //     validation: {
  //       required: true,
  //       minLength: 3,
  //     },
  //   },
  // ];
  constructor(
    private ProductsApiService: ProductsApiService,
    private router: Router
  ) {}

  addProduct() {
    console.log(this.product);
    this.ProductsApiService.addNewProduct(this.product).subscribe({
      next: () => {
        console.log('Done ');
      },
      error: (err: any) => {
        console.log(err);
      },
    });
    this.router.navigate(['Products']);
  }
}
