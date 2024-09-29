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
  id:any;
  showmore = 0;

  constructor(private purchaseApi:SupplierService, public rout:Router){}
  
  getAll(){
    this.purchaseApi.getAll().subscribe(
    (res:any) => {
      this.purchases = JSON.parse(res)
    }
  )
  }
  
  ngOnInit():void{
  this.getAll()
}

  decline(id:number){
      
  }

  approve(id:any){
      this.purchaseApi.approve(Number(id)).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }
  process(id:any){
      this.purchaseApi.process(Number(id)).subscribe(
        (res:any) => {
          this.getAll()

        }
      )
  }
  readyShip(id:any){
      this.purchaseApi.readyShip(Number(id)).subscribe(
        (res:any) => {
          this.getAll()

        }
      )
  }
  dispatch(id:any){
      this.purchaseApi.dispatch(Number(id)).subscribe(
        (res:any) => {
          this.getAll()

        }
      )
  }
  transit(id:any){
      this.purchaseApi.transit(Number(id)).subscribe(
        (res:any) => {
          this.getAll()

        }
      )
  }
  deliver(id:any){
      this.purchaseApi.deliver(Number(id)).subscribe(
        (res:any) => {
          this.getAll()

        }
      )
  }
  pay(id:any){
      this.purchaseApi.pay(Number(id)).subscribe(
        (res:any) => {
          this.getAll()

        }
      )
  }


}
