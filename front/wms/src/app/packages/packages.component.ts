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

  constructor(private packageApi:SalesService, public rout:Router){}
  
  
  ngOnInit():void{
  this.packageApi.getPackages().subscribe(
    (res:any) => {
      this.packages = JSON.parse(res)
      console.log(res)
    }
  )
}

  decline(id:number){
      
  }

  approve(id:number){
      this.packageApi.approvePackage(id).subscribe(
        (res:any) => {
          return 'success'
        }
      )
  }

}
