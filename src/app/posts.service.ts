import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "http://localhost:566/api/eposts";
  constructor(private http: Http) {}

  getPaginatedPosts(xurl?){
    let actualUrl = xurl ? xurl :this.url;
    return this.http.get(actualUrl);
  }

  getOne(id){
    return this.http.get(this.url + "/" +id);
  }

  insert($data){
    return this.http.post(this.url,$data);
  }

} 
