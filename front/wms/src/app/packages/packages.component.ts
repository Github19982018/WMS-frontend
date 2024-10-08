import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  packages:any = []
  showmore:any = 0;
  warehouse:number = 0;

  constructor(private packageApi:SalesService, public rout:Router){}
  
  getAll(){
    this.packageApi.getPackages(this.warehouse).subscribe(
    (res:any) => {
      this.packages = JSON.parse(res)
    }
  )
  }
  
  ngOnInit():void{
  this.getAll()
}

  decline(id:any){
      
  }

  packed(id:string,warehouse:string){
      this.packageApi.packed(Number(id),Number(warehouse)).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }

  shipready(id:string,warehouse:string){
      this.packageApi.shipready(Number(id),Number(warehouse)).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }

}
