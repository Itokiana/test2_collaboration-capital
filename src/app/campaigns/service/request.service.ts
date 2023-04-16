import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestService {
  requestUrl = 'assets/shared/mocks/payload-rmp.json';
  constructor(private http: HttpClient) { }

  getRequests() {
    return this.http.get<any>(this.requestUrl);
  }
}
