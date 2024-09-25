import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { PurchaseService } from './purchase.service';
import { SalesService } from './sales.service';
import { SupplierService } from './supplier.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PackagesComponent } from './packages/packages.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { PrettyPipe } from './pretty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent,
    PackagesComponent,
    SupplierComponent,
    ShipmentComponent,
    PrettyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PurchaseService,SalesService,SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
