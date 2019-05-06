import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers: [UserService]

})
export class ReposComponent implements OnInit {
  repoInput:string
  repoSearch:any

  constructor(private userService: UserService) { }

  getRepo(){
    if (this.repoInput === '') {
      this.repoSearch = false;
      alert('input field cannot be empty')
    } else {
      this.userService.searchRepo(this.repoInput).subscribe(data=>{
        this.repoSearch = data['items']
      })
    }
  }

  ngOnInit() {
  }

}
