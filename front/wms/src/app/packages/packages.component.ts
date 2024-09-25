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

  constructor(private packageApi:SalesService, public rout:Router){}
  
  getAll(){
    this.packageApi.getPackages().subscribe(
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

  approve(id:any){
      this.packageApi.approvePackage(Number(id)).subscribe(
        (res:any) => {
          this.getAll()
        }
      )
  }

}
