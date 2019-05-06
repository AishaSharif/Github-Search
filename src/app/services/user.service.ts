import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  repoUrl = 'https://api.github.com/search/repositories?q='
  userUrl = 'https://api.github.com/users/'
  accessToken = environment.accessToken
  repoName:string
  userName: string
  // repo:string
  // repos:any
  // users: any
  
  constructor(private http:HttpClient) { }

  searchRepo(repoName){
    let searchRepoLink = this.repoUrl + this.repoName
    this.repoName = repoName
    
    let promise =new Promise((resolve,reject)=>{})
    return this.http.get(searchRepoLink)
  }

  getUser(userName){
    let userLink = this.userUrl + this.userName 
    this.userName = userName
    return this.http.get(userLink)
  }
  getRepo(userName){
    this.userName = userName
    let repoLink = this.userUrl + this.userName + '/repos'
    return this.http.get(repoLink)
  }
}
