import { Component, OnInit } from '@angular/core';
import { AuthService, LoginModule } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  ngOnInit(){    
    const key = localStorage.getItem("loginKey");
    if(key){
      this.authService.loginByToken()
      .subscribe(        
        () => this.isLogged = true        
      )      
    }
    
  }
  checkValue(event: any){
    console.log(event);
    this.rememberMe = true;
 }

  loginData: LoginModule = {
    username : '',
    password : ''
  }

  isLogged = false;
  userName = '';
  rememberMe = false;

  constructor(private authService: AuthService){}

  onSubmit(): void {
    this.authService.login(this.loginData)
    .subscribe(() => {
      this.isLogged = true;
      this.userName = this.authService.tokenData$.value.username;
      this.rememberMe ? localStorage.setItem("loginKey", this.authService.saveToken$!) : false;
    });
  }  
  logOut() {
    localStorage.setItem("loginKey", '');
    this.isLogged = false;
  }

}
