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
  showmore:any;
  constructor(private purchaseApi:PurchaseService, public route:Router){}
  
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


  approve(ref:number){
    console.log('approve')
    this.purchaseApi.approve(Number(ref)).subscribe(
      (res:any) => {
        this.getAll()
      }
    )
  }
  
  decline(ref:number){
    this.purchaseApi.decline(Number(ref)).subscribe(
      (res:any) => {
        this.getAll()
      }
    )
  }

}
