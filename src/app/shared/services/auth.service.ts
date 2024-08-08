import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient) { }

  register(model:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/customers/signup`,model);
  }
}
