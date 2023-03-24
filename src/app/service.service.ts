import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  // isLoggedIn(): boolean {
  //   const token = localStorage.getItem('token');
  //   if(token){

  //     return true;
  //   }
  //   else{

  //     return false
  //   }
  // }
  // login services
  login(formdata: any) {
    return this.http.post('http://localhost:3300/login', formdata, {});
  }

  adddata(formdata: any) {
    return this.http.post('http://localhost:3300/adddata', formdata);
  }

  update(idd: string, formdata: any) {
    return this.http.post(`http://localhost:3300/update/${idd}`, formdata);
  }

  // private apiUrl = '';
  deleteUserData(id: any) {
    return this.http.delete(`http://localhost:3300/deleteData/${id}`);
  }
  viewuser() {
    return this.http.get('http://localhost:3300/dbdata');
  }
}
