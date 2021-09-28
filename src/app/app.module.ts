import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*9.	По инструкции или по примеру с пары подключить в app.module.ts HttpClientModule */
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { AddUsersComponent } from './add-users/add-users.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUsersComponent,
    UsersListComponent,
    RemoveUserComponent,
    EditUserComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
