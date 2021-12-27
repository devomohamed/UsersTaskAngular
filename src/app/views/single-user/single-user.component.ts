import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/iterfaces/users';
import { UsersService } from 'src/app/servises/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor(private userService:UsersService,private route:ActivatedRoute) { }

  userData:Users= {}

  id:string = this.route.snapshot.params['id']

  getUserData(){
    this.userService.getUser(this.id).subscribe({
      next:(res)=>{
        this.userData = res
        // console.log(this.userData);
        
      }
    })
  }

  ngOnInit(): void {
    this.getUserData()
  }

}
