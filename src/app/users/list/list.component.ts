import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = [];

  constructor( public userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUsers()
      .subscribe( data => {
        console.log(data);
        this.users = data;
      });
  }

}
