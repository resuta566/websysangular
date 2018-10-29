import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "http://localhost:566/api/eusers";
  constructor(private http: Http) {}

  gePaginatedUsers(xurl?){
    let actualUrl = xurl ? xurl :this.url;
    return this.http.get(actualUrl);
  }

}