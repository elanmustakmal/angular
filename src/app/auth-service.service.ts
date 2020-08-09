import { baseUrl } from '../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  login(data):Observable<any>
{
  console.log("login")
  return this.http.post(`${baseUrl}user/login`,data);

  
}


}
