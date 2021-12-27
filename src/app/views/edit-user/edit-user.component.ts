import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/iterfaces/users';
import { UsersService } from 'src/app/servises/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private userService:UsersService,private route:ActivatedRoute,private router:Router) { }
  id:string = this.route.snapshot.params['id']

  user:Users = {}


  getSingleUser(){
    this.userService.getUser(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.user = res
      }
    })
  }

  updateUser(user:Users){
    this.userService.editUser(this.id,user).subscribe({
      next:()=>{
        console.log(user)
        this.router.navigateByUrl('')
      }
    })
  }

  ngOnInit(): void {
    this.getSingleUser()
  }

}
