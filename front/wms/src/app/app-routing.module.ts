import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { PackagesComponent } from './packages/packages.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {path:'purchase',component:PurchaseComponent},
  {
    path:'sales',
    component:SalesComponent,
    children:[
      {path:'packages',component:PackagesComponent},
      {path:'ships',component:ShipmentComponent},
    ]
  },
  {path:'suppliers',component:SupplierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
