import { SpinnerComponent } from '@/components/spinner/spinner.component';
import { FollowersService } from '@/services/followers.service';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListCardComponent } from "../../components/user-list-card/user-list-card.component";

@Component({
  selector: 'app-followers',
  standalone: true,
  imports: [TitleCasePipe, SpinnerComponent, AsyncPipe, UserListCardComponent],
  templateUrl: './followers.component.html',
  styles: []
})
export class FollowersComponent implements OnInit {
  public followersServ = inject(FollowersService)
  private _ar = inject(ActivatedRoute)
  private _router = inject(Router)
  private _renderer = inject(Renderer2)
  private _title = inject(Title)

  protected username = ''

  ngOnInit(): void {
    this._loadStyles()
    this._ar.params.subscribe({
      next: (params) => {
        const { username = '' } = params

        if (!username) {
          this._router.navigate(['/users'])
          return;
        }
        this.username = username;
        this._title.setTitle(`Seguidores - ${username}`)
        this.followersServ.getFollowers(username)
      }
    })
  }

  private _loadStyles() {
    const style = this._renderer.createElement('link')
    style.rel = 'stylesheet'
    style.href = "http://localhost:4201/assets/user-followers-styles.css";
    this._renderer.appendChild(document.head, style);
  }
}
