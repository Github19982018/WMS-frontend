import { Component } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  purchases:any = []
  id:any;
  constructor(private purchaseApi:PurchaseService, public route:Router){}
  
  
  ngOnInit():void{
    this.purchaseApi.getAll().subscribe(
    (res:any) => {
      this.purchases = JSON.parse(res)
    }
  )
}


  approve(id:number){
    console.log('approve')
    this.purchaseApi.approve(Number(this.id)).subscribe(
      (res:any) => {
        return 'success'
      }
    )
  }
  
  decline(id:number){
    this.purchaseApi.decline(Number(this.id)).subscribe(
      (res:any) => {
        return 'success'
      }
    )
  }

}
