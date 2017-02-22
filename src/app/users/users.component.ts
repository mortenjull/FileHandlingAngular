import { Component, OnInit } from '@angular/core';

class User {
  public constructor(public name:string, public work:string) {}
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users:User[] = [new User("Ole","Teacher"), new User("Bent", "Teacher"), new User("Lars", "Teacher")];

  constructor() {}

  public add(username:string, work:string):void {
    this.users.push(new User(username, work));
  }

  ngOnInit() {
  }

}
