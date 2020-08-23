import { MessengerService } from './../../messenger.service';
import { ItemServiceService } from './../../item-service.service';
import { Item } from './../../item/item';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  id:string;
  nama:string;
  @Input() 
  item: Item;
  constructor(private route:ActivatedRoute, 
    private router:Router,
    private itemService:ItemServiceService,
    private msg: MessengerService) { }

  ngOnInit(): void {
    this.item = new Item();
    this.nama = this.route.snapshot.params['nama'];
    this.id = this.route.snapshot.params['id'];
    this.itemService.getItemById(this.id)
    .subscribe(data =>{
      console.log(data)
      this.item = data;

    }, err => console.error(err));
  }
  delete(id:string){
    this.itemService.deleteItem(id)
    .subscribe(result =>{
      if(result.success){
        alert("hapus data gagal")

      } else{
        alert("hapus item berhasil")
        this.router.navigate(['items'])
      }
    });
  }

  edit(id:string){
    this.router.navigate(['update-item', id])
  }

  handleAddToCart(){
    // console.log(this.item)
    this.msg.sendMsg(this.item)
    this.router.navigate(['buy'])
  }

}
