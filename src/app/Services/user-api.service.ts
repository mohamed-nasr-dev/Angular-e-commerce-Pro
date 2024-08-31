import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Iuser } from '../Models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private httpclient: HttpClient) {}
  addNewUser(user: Iuser): Observable<Iuser[]> {
    return this.httpclient.post<Iuser[]>(
      `${environment.baseAPIURL}/users`,
      JSON.stringify(user),
      {
        headers: {
          'Content-Type': 'Application/json',
        },
      }
    );
  }
}
