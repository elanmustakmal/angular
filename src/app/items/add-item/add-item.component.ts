import { Router } from '@angular/router';
import { ItemServiceService } from './../../item-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  formGroup: FormGroup
  constructor(private itemService:ItemServiceService, private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      nama: new FormControl('',[Validators.required]),
      stock: new FormControl('',[Validators.required]),
      harga: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      terjual: new FormControl('',[Validators.required]),
      berat: new FormControl('',[Validators.required])
    })
  }

  addItem(){
    console.log(this.formGroup.value)
    this.itemService.addItem(this.formGroup.value)
    .subscribe(result => {
      if(result.success){
        console.log(this.formGroup.value)
        alert("add item berhasil")
        this.router.navigate(['items'])
      } else{
        alert("add item gagal")
      }
    })
  }

}
