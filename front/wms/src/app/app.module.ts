import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { PurchaseService } from './purchase.service';
import { SalesService } from './sales.service';
import { SupplierService } from './supplier.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { DetailsComponent } from './details/details.component';
import { PackagesComponent } from './packages/packages.component';
import { SupplierComponent } from './supplier/supplier.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent,
    DetailsComponent,
    PackagesComponent,
    SupplierComponent,
    PackageDetailsComponent,
    SupplierDetailsComponent,
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
