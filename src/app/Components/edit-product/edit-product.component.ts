import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  product: IProduct = {} as IProduct;
  id: number = 0;
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
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('prodID')
      ? Number(this.route.snapshot.paramMap.get('prodID'))
      : 0;
    // this.product = this.productsService.getProductByID(this.id);
    // c.	In product details component, display the product details from the new service (getProductByID(pID)).
    this.ProductsApiService.getProductByID(this.id).subscribe((data) => {
      this.product = data;
      console.log('hdudhu');
    });
  }
  updateProduct() {
    this.ProductsApiService.editProduct(
      this.product.id,
      this.product
    ).subscribe({
      next: () => {
        console.log('Done ');
      },
      error: (err: any) => {
        console.log(err);
      },
    });
    this.router.navigate(['Products']);
  }

  deleteProduct() {
    let areYouSure = confirm('Are you sure you want to delete');
    if (areYouSure) {
      this.ProductsApiService.deleteProduct(this.product.id).subscribe({
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
}
