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

  packed(id:number){
    return this.http.post(`${baseurl}/sales/packages/front/approve/`,{ref:id,status:2,status_val:'Packed'})
  }

  shipready(id:number){
    return this.http.post(`${baseurl}/sales/packages/front/approve/`,{ref:id,status:3,status_val:'Ready to ship'})
  }

  declinePackage(id:number){
    return this.http.post(`${baseurl}/sales/packages/front/decline/`,{ref:id})
  }
  public getships(){
    return this.http.get<any>(baseurl+'/sales/ships/')
  }

  getship(id:number){
    return this.http.get(`${baseurl}/sales/ships/${id}`)
  }

  sentCarrier(id:number){
    return this.http.post(`${baseurl}/sales/ships/front/`,{ref:id,status:2,status_val:'Sent to carrier'})
  }

  carrier(id:number){
    return this.http.post(`${baseurl}/sales/ships/front/`,{ref:id,status:3,status_val:'Picked up by the carrier'})
  }

  customer(id:number){
    return this.http.post(`${baseurl}/sales/ships/front/`,{ref:id,status:4,status_val:'Recieved by the customer'})
  }

  pay(id:number){
    return this.http.post(`${baseurl}/sales/pay/`,{ref:id,status:5,status_val:'Payed by the customer'})
  }

  declineShip(id:number){
    return this.http.post(`${baseurl}/sales/ships/front/decline`,{ref:id})
  }

}
