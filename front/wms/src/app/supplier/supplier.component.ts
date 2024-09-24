import { SupplierService } from '../supplier.service'; 
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {

  purchases:any = []

  constructor(private purchaseApi:SupplierService, public rout:Router){}
  
  
  ngOnInit():void{
  this.purchaseApi.getAll().subscribe(
    (res:any) => {
      this.purchases = JSON.parse(res)
    }
  )
}

  decline(id:number){
      
  }

  approve(id:number){
      this.purchaseApi.approve(id).subscribe(
        (res:any) => {
          return 'success'
        }
      )
  }
  process(id:number){
      this.purchaseApi.process(id).subscribe(
        (res:any) => {
          return 'success'
        }
      )
  }
  readyShip(id:number){
      this.purchaseApi.readyShip(id).subscribe(
        (res:any) => {
          return 'success'
        }
      )
  }
  dispatch(id:number){
      this.purchaseApi.dispatch(id).subscribe(
        (res:any) => {
          return 'success'
        }
      )
  }


}
