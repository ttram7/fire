import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-united-states-of-america-place/records';

  constructor(private http: HttpClient) { }

  getApiData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
