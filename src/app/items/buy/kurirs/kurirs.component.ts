import { Router } from '@angular/router';
import { KurirService } from './../../../kurir.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kurirs',
  templateUrl: './kurirs.component.html',
  styleUrls: ['./kurirs.component.css']
})
export class KurirsComponent implements OnInit {

  kurirs = []
  selectedValue:string

  constructor(private kurirService: KurirService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  addKurir(){
    this.router.navigate(['add-kurir'])
  }

  selectKurir(id:string){
    selectedValue: this.kurirService.getKurirById(id).subscribe(
      res => this.kurirs = res,
      err => console.log(err)
    )
    this.router.navigate(['buy',id])
  }

  deleteKurir(){

  }

  reloadData(){
    this.kurirService.getAllKurir().subscribe(
      res => this.kurirs = res,
      err => console.log(err)
    )
  }

}
