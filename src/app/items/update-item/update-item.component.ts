import { ItemServiceService } from './../../item-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from './../../item/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  id:string
  item:Item
  formGroup:FormGroup
  constructor(private route:ActivatedRoute,
    private router:Router,
    private itemService:ItemServiceService) { }

  ngOnInit(): void {
    this.item = new Item();
    this.id = this.route.snapshot.params['id'];
    this.itemService.getItemById(this.id)
    .subscribe(data =>{
      console.log(data)
      this.item = data;
    }, err => console.log(err));
    this.initForm(); 
  }

  initForm(){
    this.formGroup = new FormGroup({
      id: new FormControl(this.id),
      nama: new FormControl('',[Validators.required]),
      stock: new FormControl('',[Validators.required]),
      harga: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      terjual: new FormControl('',[Validators.required]),
      berat: new FormControl('',[Validators.required])
    })
  }

  editItem(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      this.itemService.editItem(this.formGroup.value)
      .subscribe(result => {
        if(result.success){
          console.log(this.formGroup.value)
          alert("update item berhasil")
          this.router.navigate(['detail-item',this.id])
        } else{
          alert("update item gagal")
        }
      })
    }
  }

}
