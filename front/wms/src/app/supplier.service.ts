import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseurl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get<any>(baseurl+'/supplier/purchases')
  }

  get(id:number){
    return this.http.get(`${baseurl}/supplier/purchases/${id}`)
  }

  getByName(name:string){
    return this.http.get(`${baseurl}/supplier/purchases/${name}`)
  }

  approve(id:number){
    return this.http.post(`${baseurl}/supplier/front/approve/`,{ref:id,status:3,status_val:'approved'})
  }

  process(id:number){
    return this.http.post(`${baseurl}/supplier/front/approve/`,{ref:id,status:4,status_val:'order processed'})
  }

  readyShip(id:number){
    return this.http.post(`${baseurl}/supplier/front/approve/`,{ref:id,status:5,status_val:'ready for shipping'})
  }

  dispatch(id:number){
    return this.http.post(`${baseurl}/supplier/front/approve/`,{ref:id,status:6,status_val:'dispatched'})
  }

  decline(id:number){
    return this.http.post(`${baseurl}/supplier/front/decline/`,{ref:id})
  }

}