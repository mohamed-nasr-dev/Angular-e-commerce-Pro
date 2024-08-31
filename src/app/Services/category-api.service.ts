import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  constructor(private httpclient: HttpClient) {}

  // a.	getAllCateogories() that returns all categories (use GET API: http://localhost:3000/categories).
  getAllCateogories(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(
      `${environment.baseAPIURL}/categories`
    );
  }
}
