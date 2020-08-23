import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KurirService {

  constructor(private http: HttpClient) { }

  getAllKurir(){
    console.log("all kurir")
    return this.http.get<any>(`${baseUrl}kurir/`);
  }

  addKurir(data):Observable<any>{
    console.log("add kurir")
    return this.http.post<any>(`${baseUrl}kurir/insert`,data);
  }


  getKurirById(id:string):Observable<any>{
    return this.http.get<any>(`${baseUrl}kurir/findById?id=${id}`)
  }

  deleteKurir(id:string):Observable<any>{
    console.log("delete kurir")
    return this.http.delete(`${baseUrl}kurir/delete?id=${id}`)
  }

  editKurir(data):Observable<any>{
    console.log("edit kurir")
    return this.http.put(`${baseUrl}kurir/update`,data);
  }
}
