import { Component } from '@angular/core';
import { SalesService } from '../sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent {
  ships:any = []
  id:any;
  showmore:any;
  warehouse:number=1;

  constructor(private salesApi:SalesService, public rout:Router){}
  
  getAll(){
    this.salesApi.getships(this.warehouse).subscribe(
    (res:any) => {
      this.ships = JSON.parse(res)
    }
  )
  }

  ngOnInit():void{
  this.getAll()
}

  decline(id:number){
      
  }

  sentCarrier(id:number,warehouse:number){
      this.salesApi.sentCarrier(Number(id),Number(warehouse)).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }
  carrier(id:number,warehouse:number){
      this.salesApi.carrier(Number(id),Number(warehouse)).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }
  customer(id:number,warehouse:number){
      this.salesApi.customer(Number(id),Number(warehouse)).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }
  pay(id:number,warehouse:number){
      this.salesApi.pay(Number(id),Number(warehouse)).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }


}
