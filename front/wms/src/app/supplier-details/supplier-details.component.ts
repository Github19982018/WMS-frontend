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
  
  getAll(){
    this.purchaseApi.getAll().subscribe(
      (res:any) => {
        this.details = JSON.parse(res)
      }
    )
  }
  
  ngOnInit():void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.getAll()
}

  decline(id:number){
      
  }

  approve(id:number){
      this.purchaseApi.approve(id).subscribe(
        (res:any) => {
         this.getAll()
        }
      )
  }
  process(id:number){
      this.purchaseApi.process(id).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }
  readyShip(id:number){
      this.purchaseApi.readyShip(id).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }
  dispatch(id:number){
      this.purchaseApi.dispatch(id).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }


}
