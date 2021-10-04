import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*9.	По инструкции или по примеру с пары подключить в app.module.ts HttpClientModule */
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { AddUsersComponent } from './add-users/add-users.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthInterceptor } from './icterceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddUsersComponent,
    UsersListComponent,
    RemoveUserComponent,
    EditUserComponent,
    LoginFormComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
