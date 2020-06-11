import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: any;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
     this.UserDetails();
  }

  UserDetails(){
     this.userservice.getUser().subscribe((data) => {this.users= data});
     console.log(this.users);
  }

  editUser(id: number){
  this.router.navigate(['/update',id]);

  }

  deleteUser(id: number){
    this.userservice.deleteUser(id);
  }

  logout(){
	  this.userservice.logout();
	  this.router.navigate(['/login']);
  }
}
