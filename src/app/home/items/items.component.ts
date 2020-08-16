import { Router } from '@angular/router';
import { ItemServiceService } from './../../item-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = []
  constructor(private itemService: ItemServiceService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData()
  }

  addItem(){
    this.router.navigate(['add-item'])
  }
  updateItem(){
    this.router.navigate(['update-item'])
  }
  detailItem(id:string){
    this.router.navigate(['detail-item',id])
  }

  reloadData(){
    this.itemService.getAllItems().subscribe(
      res => this.items = res,
      err => console.log(err)
    )
  }



}
