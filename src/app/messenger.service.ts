import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  
  subject = new Subject()

  constructor(private http:HttpClient) { }

  sendMsg(item) {
    this.subject.next(item)
  }

  getMsg(){
    return this.subject.asObservable()
  }

  // getCartItems(): Observable<Item[]> {
  //   //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
  //   return this.http.get<Item[]>(baseUrl).pipe(
  //     map((result: any[]) => {
  //       let cartItems: Item[] = [];

  //       for (let item of result) {
  //         let productExists = false

  //         for (let i in cartItems) {
  //           if (cartItems[i].productId === item.product.id) {
  //             cartItems[i].qty++
  //             productExists = true
  //             break;
  //           }
  //         }

  //         if (!productExists) {
  //           cartItems.push(new Item(item.id, item.product));
  //         }
  //       }

  //       return cartItems;
  //     })
  //   );
  // }

  // addProductToCart(product: Product): Observable<any> {
  //   return this.http.post(cartUrl, { product });
  // }
}
