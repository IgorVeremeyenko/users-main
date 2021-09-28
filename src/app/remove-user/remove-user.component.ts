import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})
export class RemoveUserComponent {

  @Output() remove = new EventEmitter();

  removeUser() {
    this.remove.emit();
  }

}
