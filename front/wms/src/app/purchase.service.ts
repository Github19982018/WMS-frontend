import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseurl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})

export class PurchaseService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get(baseurl+'/purchase')
  }

  get(id:number){
    return this.http.get(`${baseurl}/purchase/${id}`)
  }

  approve(id:number){
    return this.http.post(`${baseurl}/purchase/front/approve`,{ref:id})
  }

}
