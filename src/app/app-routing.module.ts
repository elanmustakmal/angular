import { AddKurirComponent } from './items/buy/kurirs/add-kurir/add-kurir.component';
import { KurirsComponent } from './items/buy/kurirs/kurirs.component';
import { BuyComponent } from './items/buy/buy.component';
import { DetailItemComponent } from './items/detail-item/detail-item.component';
import { UpdateItemComponent } from './items/update-item/update-item.component';
import { AddItemComponent } from './items/add-item/add-item.component';
import { ItemsComponent } from './home/items/items.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "items", component:ItemsComponent},
  {path: "add-item", component:AddItemComponent},
  {path: "update-item/:id", component:UpdateItemComponent},
  {path: "detail-item/:id", component:DetailItemComponent},
  {path: "buy", component:BuyComponent},
  {path: "kurir", component:KurirsComponent},
  {path: "add-kurir", component: AddKurirComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
