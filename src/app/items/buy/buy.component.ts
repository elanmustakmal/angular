import { MessengerService } from './../../messenger.service';
import { Item } from './../../item/item';
import { Router } from '@angular/router';
import { ItemServiceService } from './../../item-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  items = [
    // { nama:'elan', harga:432, qty:4}
  ];
  total = 0
  // qty:number
  formGroup:FormGroup
  constructor(private itemService:ItemServiceService, private msg: MessengerService,
     private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
   this.msg.getMsg().subscribe((item:Item) => {
     console.log(item)
      this.addItemToCart(item)
     
   })
  }

  addItemToCart(item:Item){
    this.items.push({
      nama: item.nama,
      harga: item.harga,
      qty: 1
    })

    this.total = 0
    this.items.forEach(item => {
      this.total += (item.qty * item.harga)
    })
  }

  buy(){

  }

  kurir(){
    this.router.navigate(['kurir'])
  }

  payment(){
    this.router.navigate(['payment'])
  }

}
