import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Products } from '../../types';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

  getProducts = (url: string, params: PaginationParams): Observable<Products> => {
    let headers = new HttpHeaders ({
      'Access-Control-Allow-Origin': '*',
    });
    
    return this.apiService.get(url, {
      headers ,
      params,
      responseType: 'json'
    });
  }

  

}
