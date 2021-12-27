import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../iterfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://jsonplaceholder.typicode.com/users/'
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<Users[]>(this.url)
  }
  getUser(id:any){
    return this.http.get(this.url+id)
  }

   // post User
   addUser(data:Users){
    return this.http.post(this.url,data)
  }

  // delete User
  deleteUser(id:any){
    return this.http.delete(this.url + id)
  }

  editUser(id:any,body:Users){
    return this.http.patch(this.url + id ,body)
  }
}
