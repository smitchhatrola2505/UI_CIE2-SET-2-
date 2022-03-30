import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { idata } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  getData(): Observable<idata[]>{
    return this.http.get<idata[]>(this.url);
  }
  deleted(m:any){
    return this.http.delete<idata[]>(this.url+'/'+'id');
  }
}
