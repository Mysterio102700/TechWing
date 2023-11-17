import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  Baseurl ='https://sheetdb.io/api/v1/k68hudpj6gmzu'
  // 'https://sheetdb.io/api/v1/jvu53xe5f9ksg';

constructor(private http: HttpClient) {}
ngOnInit(): void {}

details(book: Book): Observable<HttpResponse<any>> {
  return this.http.post<any>(this.Baseurl, book, { observe: 'response' });
}
}
