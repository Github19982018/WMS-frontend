import { Component } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent {
  details:any = []
  id:any;

  constructor(private purchaseApi:SupplierService, public route:ActivatedRoute){}
  
  
  ngOnInit():void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.purchaseApi.getAll().subscribe(
    (res:any) => {
      this.details = JSON.parse(res)
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
