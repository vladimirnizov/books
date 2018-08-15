

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  shared:number;
  url = 'https://www.googleapis.com/books/v1/volumes?q=q';
  constructor(private http: HttpClient) { }


  getBooks(){
    return this.http.get(this.url).pipe(
      map(
        (response)=>{
      return response;
    }
  ));
  }


}