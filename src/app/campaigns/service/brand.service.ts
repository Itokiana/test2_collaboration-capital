import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../model/brand.model';

@Injectable()
export class BrandService {
  brandUrl = 'assets/shared/mocks/brands.json';
  constructor(private http: HttpClient) { }

  getBrands() {
    return this.http.get<Brand[]>(this.brandUrl);
  }
}
