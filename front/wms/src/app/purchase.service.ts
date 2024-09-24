import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseurl = 'http://localhost:8000';
@Injectable({
  providedIn: 'root'
})

export class PurchaseService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get<any>(baseurl+'/purchase')
  }

  get(id:number){
    return this.http.get(`${baseurl}/purchase/${id}`)
  }

  getByName(name:string){
    return this.http.get(`${baseurl}/purchase/${name}`)
  }

  approve(id:number){
    return this.http.post(`${baseurl}/purchase/front/approve`,{ref:id})
  }

  decline(id:number){
    return this.http.post(`${baseurl}/purchase/front/decline`,{ref:id})
  }

}
