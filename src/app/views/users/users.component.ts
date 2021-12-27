import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/iterfaces/users';
import { UsersService } from 'src/app/servises/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  UsersData:Users[] = []
  constructor(private users:UsersService) { }

  getUsersData(){
    this.users.getUsers().subscribe({
      next:(res:any)=>{
        this.UsersData = res
        console.log(this.UsersData);
        
      },
      error:(httpError:any)=>{
        console.log(httpError);
        
      }
    })
  }

  addUser(user:any){
    this.users.addUser(user).subscribe({
      next:()=>{
        console.log(user)
        this.UsersData.splice(0,0,user)
      }
    })
  }

  deleteUser(user:any,i:number){
    this.users.deleteUser(user).subscribe({
      next:()=>{
        this.UsersData.splice(i,1)
      }
    })
  }

  ngOnInit(): void {
    this.getUsersData()
  }
  log(userName:any){
    console.log(userName)
   }
   onSubmit(contactForm:any){
        console.log(contactForm);
   }

}
