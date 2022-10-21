import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postInfo(data:any){
    return this.http.post<any>("http://localhost:3000/bookingList/",data);
  }

  getInfo(){
    return this.http.get<any>("http://localhost:3000/bookingList/");
  }
  
  putInfo(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/bookingList/"+id ,data);
  }

  deleteInfo(id:number){
    return this.http.delete<any>("http://localhost:3000/bookingList/"+id);
  }
}
