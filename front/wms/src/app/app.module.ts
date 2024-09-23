import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { PurchaseService } from './purchase.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseComponent } from './purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
