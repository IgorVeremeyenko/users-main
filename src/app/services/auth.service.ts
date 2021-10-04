import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map, first } from 'rxjs/operators';

export interface Token {
  token: string | null
}

export interface LoginModule {
  username: string,
  password: string
}

export interface TokenData {
  userId : number | null,
  username : string,
  notBefore : Date,
  expires : Date
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  dataToken!: Token;
  tokens!: TokenData;
  saveToken$!: string;


  myApiUrl = "https://localhost:5001/api/AuthToken";
  myTestTokenUrl = "https://localhost:5001/api/AuthTest";

  token$ = new BehaviorSubject<Token>(this.dataToken);
  tokenData$ = new BehaviorSubject<TokenData>(this.tokens);

  constructor(private client: HttpClient){}

  login(loginModule: LoginModule){
    return this.client.post<Token>(this.myApiUrl, loginModule)
    .pipe(
      tap(t => this.token$.next(t)),
      tap(t => this.tokenData$.next(this.readToken(t)))    
    );
  }

  loginByToken() {   
    return this.client.get(this.myTestTokenUrl);
  }

  private readToken(token: Token): TokenData{
    this.saveToken$ = token.token!;
    const dataPart = token.token!.split('.')[1];
    const dataJsonString = atob(dataPart);
    const dataJson = JSON.parse(dataJsonString);

    const idStr = dataJson["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    const userId = idStr ? parseInt(idStr) : null;

    const username = dataJson["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

    const notBefore = dataJson["nbf"];
    const expires = dataJson["exp"];

    return {
      userId,
      username,
      notBefore,
      expires
    }
  }
}


