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

  constructor(private salesApi:SalesService, public rout:Router){}
  
  getAll(){
    this.salesApi.getships().subscribe(
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

  sentCarrier(id:number){
      this.salesApi.sentCarrier(id).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }
  carrier(id:number){
      this.salesApi.carrier(id).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }
  customer(id:number){
      this.salesApi.customer(id).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }
  pay(id:number){
      this.salesApi.pay(id).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }


}
