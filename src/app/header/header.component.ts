import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../register-page/user-register.model';
import { UsersService } from '../services/users-service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  loggedUser: UserDetails;
  user:UserDetails;  
  
  constructor(private usersService: UsersService) { 
    this.loggedUser=new UserDetails();
    this.user=new UserDetails();
  }

  ngOnInit(): void {
  }
  onAboutClick(){
    document.getElementById("replace").innerHTML="<app-about-us></app-about-us>";
    }
  onVipClick()
  {
    
    document.getElementById("replace").innerHTML="<app-vip-arena></app-vip-arena>";
  }
  onRegisterClick(){
    
    document.getElementById("replace").innerHTML="<app-register-page></app-register-page>";
  }
  onLoginClick(){
    
    document.getElementById("replace").innerHTML="<app-login-page></app-login-page>";
  }
  onBrandClick(){
    
    document.getElementById("replace").innerHTML="<app-home-page></app-home-page>";
  }

}
