import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseurl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})

export class PurchaseService {

  constructor(private http:HttpClient) { }

  public getAll(warehouse:number){
    return this.http.get<any>(`${baseurl}/${warehouse}/purchases`)
  }

  get(id:number,warehouse:number){
    return this.http.get(`${baseurl}/${warehouse}/purchases/${id}`)
  }

  getByName(name:string,warehouse:number){
    return this.http.get(`${baseurl}/${warehouse}/purchases/${name}`)
  }

  approve(id:number,warehouse:number){
    return this.http.post(`${baseurl}/${warehouse}/purchases/front/approve/`,{ref:id})
  }

  decline(id:number,warehouse:number){
    return this.http.post(`${baseurl}/${warehouse}/purchases/front/decline/`,{ref:id})
  }

}
