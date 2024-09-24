import { Component } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  details:any = []
  id:any;

  constructor(private purchaseApi:PurchaseService, private route:ActivatedRoute){}
  
  ngOnInit():void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.purchaseApi.get(Number(this.id)).subscribe(
      (res:any) => {
        [this.details] = JSON.parse(res)
        console.log(this.id, this.details)
    }
  )
}

approve(id:number){
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
