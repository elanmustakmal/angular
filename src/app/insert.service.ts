import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsertService {
  constructor(private http:HttpClient) { }
  
  insert(data):Observable<any>
{
  console.log("insert")
  return this.http.post(`${baseUrl}user/insert`,data);
}}