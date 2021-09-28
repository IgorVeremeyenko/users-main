import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../interface/User';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  [x: string]: any;
  users$: User[] = [];
  pressed = false;
  isEditing = false;
  enableIndex = 0;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getUsers()
      .subscribe(data => {
        this.users$ = [{id: 0, name: '', username: '', email: ''}, ...data];
        this.dataService.counter = this.users$.length;
      });
  }

  buttonHandle() {
    this.pressed = !this.pressed;
  }

  removeAppUser(id: number) {
    this.dataService.removeUser(id)
      .subscribe(data => this.users$ = this.users$.filter(t => t.id != id));
  }

  openInput(i: number) {
    this.isEditing = !this.isEditing;
    this.enableIndex = i;
  }

  editAppUser(usersUpdate: any) {
    let id = this.enableIndex;
    id += 1;
    this.dataService.editUser(id, usersUpdate)
    .subscribe(() => this.users$.map(t => {
      if (t.id == id)
      this.users$[id] = t;
    }));
    this.isEditing = !this.isEditing;
  }

  editAppCancelButton() {
    this.isEditing = false;
    this.ngOnInit();
  }
}

