import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserList } from '@/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {
  private _followers = new BehaviorSubject<UserList[]>([])
  public followers$ = this._followers.asObservable()

  constructor(
    private _http: HttpClient
  ) { }

  public getFollowers(username: string) {
    this._http.get<UserList[]>(`https://api.github.com/users/${username}/followers`)
      .subscribe({
        next: (resp) => {
          this._followers.next(resp)
          console.log(resp)
        }
      })
  }
}
