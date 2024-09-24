import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { DetailsComponent } from './details/details.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';

const routes: Routes = [
  {path:'purchase',component:PurchaseComponent},
  {path:'purchase/details/:id',component:DetailsComponent},
  {path:'packages',component:PackagesComponent},
  {path:'packages/details/:id',component:PackageDetailsComponent},
  {path:'suppliers/',component:SupplierComponent},
  {path:'suppliers/details/:id',component:SupplierDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
