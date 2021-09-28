import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../interface/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

  @Input() name: boolean = false;
  @Input() username: boolean = false;
  @Input() email: boolean = false;
  @Input() button: boolean = false;
  @Input() users!: User;
  @Output() flag = new EventEmitter<boolean>();
  @Output() edit = new EventEmitter<User>();

  editComplete() {
    this.edit.emit(this.users);
  }

  setButtonFalse() {
    this.button = false;
    this.flag.emit(false);
  }
  
}
