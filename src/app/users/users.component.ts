import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  response:any;
  usersForm = new FormGroup({
    name: new FormControl(Validators.required),
    email: new FormControl(Validators.required),
    password: new FormControl(Validators.required),
  })

  constructor(private service: UsersService) {} 

  ngOnInit() {
     this.service.gePaginatedUsers().subscribe(r => {
       this.response = r.json();
     })
  }

  changePage(xurl){
    this.service.gePaginatedUsers(xurl).subscribe(r => {
      this.response = r.json();
    })
  }

}
