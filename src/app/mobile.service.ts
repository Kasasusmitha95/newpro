import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }
  url ="https://jsonplaceholder.typicode.com/todos"

  fetchMobiles(){
    
    return this.http.get(this.url);
  }
}
