import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../interface/User';
import { DataService } from '../services/data.service';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent {

  addingForm: any = {
    name: '',
    username: '',
    email: ''
  }

  constructor(private usersArray: UsersListComponent, private service: DataService) { }

  onSubmit(form: NgForm) {
    this.addUsers(form.value);
  }

  addUsers(array: User) {
    array["id"] = this.service.counter;
    this.service.counter++;
    this.service.addUsers(array)
      .subscribe(() => this.usersArray.users$.push(array));
    this.usersArray.pressed = false;

  }

}
