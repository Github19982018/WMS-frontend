import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseurl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})

export class PurchaseService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get<any>(baseurl+'/purchases')
  }

  get(id:number){
    return this.http.get(`${baseurl}/purchases/${id}`)
  }

  getByName(name:string){
    return this.http.get(`${baseurl}/purchases/${name}`)
  }

  approve(id:number){
    return this.http.post(`${baseurl}/purchases/front/approve/`,{ref:id})
  }

  decline(id:number){
    return this.http.post(`${baseurl}/purchases/front/decline/`,{ref:id})
  }

}
