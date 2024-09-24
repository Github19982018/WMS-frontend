import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseurl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})

export class SalesService {

  constructor(private http:HttpClient) { }

  public getPackages(){
    return this.http.get<any>(baseurl+'/sales/packages/')
  }

  getPackage(id:number){
    return this.http.get(`${baseurl}/sales/packages/${id}`)
  }

  approvePackage(id:number){
    return this.http.post(`${baseurl}/sales/packages/front/approve`,{ref:id})
  }

  declinePackge(id:number){
    return this.http.post(`${baseurl}/sales/packages/front/decline`,{ref:id})
  }

}
