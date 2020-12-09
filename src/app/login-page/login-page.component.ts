import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../register-page/user-register.model';
import { UsersService } from '../services/users-service/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userFound=false;
  i=0;
  
  user: UserDetails;
  users: UserDetails[];
  checkUser: UserDetails;
  @Input() loggedUser: UserDetails;
  
 
  constructor(private usersService : UsersService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.user= new UserDetails();

    this.usersService.getUsers().subscribe(
      (users: UserDetails[])=>{
        this.users=users;
        console.log(users);
      },
      (error)=>{
        console.log(error);
      });

  }
  onLogin(){

      this.usersService.loginUser(this.user.email,this.user.password).subscribe(
      (checkUser: UserDetails)=>{
        //this.checkUser=checkUser;
        this.router.navigate(['/view']);
        //console.log(checkUser);
      },
      (error)=>{
        console.log(error);
      });
    
      
      // if(this.user.email==this.checkUser.email && this.user.password==this.checkUser.password)
      //   {
      //     this.router.navigate(['/view'])
      //   }
      //   else{
      //    document.getElementById("success-message").innerText="Email or Password Incorrect. Please Try Again.";
      //   }
    }

}
