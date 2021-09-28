/*6.	Создать сервис для получения списка пользователей и перенести туда ранее созданный массив */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public counter = 0;

  private myUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { }
  getUsers() {
    return this._http.get<User[]>(this.myUrl);
  }

  addUsers(newAdd: User): Observable<{}> {
    return this._http.post(this.myUrl, newAdd);
  }

  removeUser(id: number): Observable<{}> {
    return this._http.delete(`${this.myUrl}/${id}`);
  }

  editUser(id: number, chanchedUser: User): Observable<{}> {
    return this._http.put<User>(`${this.myUrl}/${id}`, chanchedUser);
  }

}