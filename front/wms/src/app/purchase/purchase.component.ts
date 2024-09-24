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
  constructor(private purchaseApi:PurchaseService, public rout:Router){}
  ngOnInit():void{
  this.purchaseApi.getAll().subscribe(
    (res:any) => {
      this.purchases = res['data']
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

}
