import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { PackagesComponent } from './packages/packages.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ShipmentComponent } from './shipment/shipment.component';

const routes: Routes = [
  {path:'purchase',component:PurchaseComponent},
  {path:'packages',component:PackagesComponent},
  {path:'suppliers',component:SupplierComponent},
  {path:'ships',component:ShipmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
