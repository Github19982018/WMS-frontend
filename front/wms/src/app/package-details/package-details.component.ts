import { Component } from '@angular/core';
import { SalesService } from '../sales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent {
  details:any = []
  id:any;

  constructor(private pacakgeApi:SalesService, private route:ActivatedRoute){}
  
  ngOnInit():void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.pacakgeApi.getPackage(Number(this.id)).subscribe(
      (res:any) => {
        [this.details] = JSON.parse(res)
        console.log(this.id, this.details)
    }
  )
}

approve(id:number){
  console.log('approve')
  this.pacakgeApi.approvePackage(Number(this.id)).subscribe(
    (res:any) => {
      return 'success'
    }
  )
}

decline(id:number){
  this.pacakgeApi.declinePackge(Number(this.id)).subscribe(
    (res:any) => {
      return 'success'
    }
  )
}
}
