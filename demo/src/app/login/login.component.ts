import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  output: boolean;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(uname: string ,pwd: string){
      this.output = this.userservice.checkUser(uname,pwd);
      console.log(this.output);
  
    if(this.output ==true){
    this.router.navigate(['/']);
    }
    else
    {
    this.router.navigate(['/login']);
    }
  }




}
