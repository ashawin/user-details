import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
ngForm: FormGroup;
msg: boolean;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void { 
  this.ngForm = new FormGroup({
  username: new FormControl(),
  useremail: new FormControl(),
  usermobile: new FormControl(),
  })
  }

  register(data){

   this.userservice.addUser(data).subscribe((data) => {this.msg=true;});
  }

}
