import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MainComponent } from './Layout/main/main.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { LandingComponent } from './Components/landing/landing.component';
import { ImgStyleDirective } from './Directives/img-style.directive';
import { ApplyDiscountPipe } from './Pipes/apply-discount.pipe';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './Components/admin/admin.component';
import { RegisterComponent } from './Components/register/register.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { LoadingInterceptor } from './loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ProductsComponent,
    SideMenuComponent,
    ProductsListComponent,
    ProductComponent,
    ProductsParentComponent,
    LandingComponent,
    ImgStyleDirective,
    ApplyDiscountPipe,
    CreditCardPipe,
    NotFoundPageComponent,
    AdminComponent,
    RegisterComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
