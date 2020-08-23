import { AddKurirComponent } from './items/buy/kurirs/add-kurir/add-kurir.component';
import { KurirsComponent } from './items/buy/kurirs/kurirs.component';
import { ItemsComponent } from './home/items/items.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatIconModule} from '@angular/material/icon'; 
import { MatSliderModule } from '@angular/material/slider';

import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './items/add-item/add-item.component';
import { UpdateItemComponent } from './items/update-item/update-item.component';
import { DetailItemComponent } from './items/detail-item/detail-item.component';
import { BuyComponent } from './items/buy/buy.component';
import { PaymentComponent } from './items/buy/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemsComponent,
    HomeComponent,
    AddItemComponent,
    UpdateItemComponent,
    DetailItemComponent,
    BuyComponent,
    KurirsComponent,
    PaymentComponent,
    AddKurirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatIconModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
