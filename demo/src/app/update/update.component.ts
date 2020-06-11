import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
 id: number;

ngForm: FormGroup;
msg: boolean;
user: any;
  constructor(private userservice: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.params.subscribe(params => {
  this.id = +params['id'];
  })
  this.ngForm = new FormGroup({
  username: new FormControl(),
  useremail: new FormControl(),
  usermobile: new FormControl(),
  })
     this.userservice.getUserById(id).subscribe((data) => {this.ngForm.setValue(data);});
  }

  getSingleUser(id: number){

  }

  update(data: any){
   this.userservice.updateUser(data).subscribe((data) => {this.msg = true;});

  }
}
