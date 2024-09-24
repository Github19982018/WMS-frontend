import { Component } from '@angular/core';
import { SalesService } from '../sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent {
  purchases:any = []
  id:any;

  constructor(private salesApi:SalesService, public rout:Router){}
  
  
  ngOnInit():void{
  this.salesApi.getships().subscribe(
    (res:any) => {
      this.purchases = JSON.parse(res)
    }
  )
}

  decline(id:number){
      
  }

  carrier(id:number){
      this.salesApi.carrier(id).subscribe(
        (res:any) => {
          return 'success'
        }
      )
  }
  customer(id:number){
      this.salesApi.customer(id).subscribe(
        (res:any) => {
          return 'success'
        }
      )
  }
  pay(id:number){
      this.salesApi.pay(id).subscribe(
        (res:any) => {
          return 'success'
        }
      )
  }


}
