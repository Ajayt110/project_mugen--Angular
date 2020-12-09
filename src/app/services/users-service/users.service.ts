import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/register-page/user-register.model';

@Injectable()
export class UsersService {

  private usersDetails : UserDetails[];
  private checkUser : UserDetails;
  constructor(private httpClient:HttpClient) { }

  // public usersRegister : UserDetails[]=[
  //   new UserDetails('Test Name','test@gmail.com','1112223336','test123'),
  //   new UserDetails('Ajay Srivatsav','ajay@gmail.com','7856965854','aj@110125')
  // ];


  getUsers(): Observable<UserDetails[]>{
    return this.httpClient.get<UserDetails[]>('http://localhost:8085/user');
  }

  addUser(user:UserDetails): Observable<UserDetails>{
    const reqHeaders={'Content-type':'application/json'};
    return this.httpClient.post('http://localhost:8085/user',user,{headers:reqHeaders});
  }

  loginUser(email: String , password: String):Observable<UserDetails>{   
    const reqHeaders={'Content-type':'application/json'};
    const body={'email':email, 'password':password};
   return this.httpClient.post<UserDetails>('http://localhost:8085/user/login?email='+email+'&password='+password,null,{headers:reqHeaders});
   //return this.checkUser;
  } 
   //{'email':email, 'password':password}

}