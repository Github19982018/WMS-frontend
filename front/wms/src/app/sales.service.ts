import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseurl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})

export class SalesService {

  constructor(private http:HttpClient) { }

  public getPackages(warehouse:number){
    return this.http.get<any>(`${baseurl}/${warehouse}/sales/packages/`)
  }

  getPackage(id:number,warehouse:number){
    return this.http.get(`${baseurl}/${warehouse}/sales/packages/${id}`)
  }

  packed(id:number,warehouse:number){
    return this.http.post(`${baseurl}/${warehouse}/sales/packages/front/approve/`,{ref:id,status:2,status_val:'Packed'})
  }

  shipready(id:number,warehouse:number){
    return this.http.post(`${baseurl}/${warehouse}/sales/packages/front/approve/`,{ref:id,status:3,status_val:'Ready to ship'})
  }

  declinePackage(id:number,warehouse:number){
    return this.http.post(`${baseurl}/${warehouse}/sales/packages/front/decline/`,{ref:id})
  }
  public getships(warehouse:number){
    return this.http.get<any>(`${baseurl}/${warehouse}/sales/ships/`)
  }

  getship(id:number,warehouse:number){
    return this.http.get(`${baseurl}/${warehouse}/sales/ships/${id}`)
  }

  sentCarrier(id:number,warehouse:number){
    return this.http.post(`${baseurl}/${warehouse}/sales/ships/front/`,{ref:id,status:2,status_val:'Sent to carrier'})
  }

  carrier(id:number,warehouse:number){
    return this.http.post(`${baseurl}/${warehouse}/sales/ships/front/`,{ref:id,status:3,status_val:'Picked up by the carrier'})
  }

  customer(id:number,warehouse:number){
    return this.http.post(`${baseurl}/${warehouse}/sales/ships/front/`,{ref:id,status:4,status_val:'Recieved by the customer'})
  }

  pay(id:number,warehouse:number){
    return this.http.post(`${baseurl}/${warehouse}/sales/pay/`,{ref:id,status:5,status_val:'Payed by the customer'})
  }

  declineShip(id:number,warehouse:number){
    return this.http.post(`${baseurl}/${warehouse}/sales/ships/front/decline`,{ref:id})
  }

}
