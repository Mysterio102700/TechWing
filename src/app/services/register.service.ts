import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  Baseurl =
    'https://sheetdb.io/api/v1/0lhp0ysacvrnj';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  details(details: Register): Observable<Register> {
    return this.http.post<Register>(this.Baseurl, details);
  }
}
