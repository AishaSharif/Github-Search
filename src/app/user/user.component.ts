import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  repoInput:string
  repoSearch:any
  userName:string
  users:any
  repos: any

  constructor(private userService: UserService) { }

  getUsers(){
    this.userService.getUser(this.userName).subscribe(data=>{
      this.users = data
    })
  }

  getRepos(){
    this.userService.getRepo(this.userName).subscribe(data=>{
      this.repos = data
    })
  }
  
  ngOnInit() {
  }

}
