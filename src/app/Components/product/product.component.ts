import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsApiService } from '../../Services/products-api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product: IProduct | undefined;
  id: number = 0;
  currentIndex: number = 0;
  productsIDS: number[] = [];
  constructor(
    private productsServiceApi: ProductsApiService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    // this.id = this.activedRoute.snapshot.paramMap.get('prodID')
    //   ? Number(this.activedRoute.snapshot.paramMap.get('prodID'))
    //   : 0;
    // / this.product = this.productsService.getProductByID(this.id);
    // / c.	In product details component, display the product details from the new service (getProductByID(pID)).
    // this.productsServiceApi.getProductByID(this.id).subscribe((data) => {
    //   this.product = data;
    //   this.currentIndex = data.id;
    //   console.log('hdudhu');
    // });
    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('prodID') ? Number(paramMap.get('prodID')) : 0;
      this.productsServiceApi.getProductByID(this.id).subscribe((data) => {
        if (data) {
          this.product = data;
        } else {
          alert('product is not found');
        }
      });
    });
    this.productsServiceApi.getAllProducts().subscribe({
      next: (data) => {
        this.productsIDS = data.map((pro) => pro.id);
        console.log('Done ');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  goBack(id: number) {
    console.log(this.productsIDS);
    this.currentIndex = this.productsIDS.indexOf(id);
    //  console.log(this.currentPrdIndex);
    this.router.navigate([
      '/productDetails',
      this.productsIDS[--this.currentIndex],
    ]);
  }
  goFoward(id: number) {
    console.log(this.productsIDS);
    this.currentIndex = this.productsIDS.indexOf(id);
    //  console.log(this.currentPrdIndex);
    this.router.navigate([
      '/productDetails',
      this.productsIDS[++this.currentIndex],
    ]);
  }
}
