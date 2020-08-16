import { Observable } from 'rxjs';
import { baseUrl } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http: HttpClient) { }

  getAllItems(){
    console.log("all items")
    return this.http.get<any>(`${baseUrl}item/`);
  }

  addItem(data):Observable<any>{
    console.log("add item")
    return this.http.post<any>(`${baseUrl}item/insert`,data);
  }

  getItemByName(nama: string):Observable<any>{
    return this.http.get<any>(`${baseUrl}item/findByName?nama=${nama}`)
  }

  getItemById(id:string):Observable<any>{
    return this.http.get<any>(`${baseUrl}item/findById?id=${id}`)
  }

  deleteItem(id:string):Observable<any>{
    console.log("delete item")
    return this.http.delete(`${baseUrl}item/delete?id=${id}`)
  }

  editItem(data):Observable<any>{
    console.log("edit item")
    return this.http.put(`${baseUrl}item/update`,data);
  }
}
