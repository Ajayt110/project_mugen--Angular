import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users-service/users.service';
import { UserDetails } from './user-register.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  user:UserDetails;
  users:UserDetails[];
 
  constructor(private userService: UsersService, private httpClient: HttpClient, private router:Router) {
    
   }

  ngOnInit(): void {
    //this.users=this.userService.getUsers();
    this.user= new UserDetails();
  }

  onAddUser():void
  {
    this.userService.addUser(this.user).subscribe((user:UserDetails) => {
      console.log(user);
      this.router.navigate(["../login"]);
    },
    (error)=>{
      console.log(error);
    });
    //console.log(this.user);
  }
}
