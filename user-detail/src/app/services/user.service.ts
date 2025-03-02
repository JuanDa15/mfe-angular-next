import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GithubUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user = new BehaviorSubject<null | GithubUser>(null)
  public user = this._user.asObservable()


  constructor(
    private _http: HttpClient
  ) { }

  getUser(username: string) {
    this._http.get<GithubUser>(`https://api.github.com/users/${username}`).subscribe({
      next: (resp) => {
        this._user.next(resp)
        console.log(resp)
      }
    })
  }
}
