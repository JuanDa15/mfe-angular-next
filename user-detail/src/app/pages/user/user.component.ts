import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe, I18nPluralPipe, TitleCasePipe } from '@angular/common';
import { Title } from '@angular/platform-browser'
import { FollowersPipe } from '@/pipes/followers.pipe';
import { UserService } from '@/services/user.service';
import { SpinnerComponent } from '@/components/spinner/spinner.component';
import { ButtonComponent } from '@/components/button/button.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AsyncPipe, SpinnerComponent, TitleCasePipe, I18nPluralPipe, FollowersPipe, ButtonComponent, RouterLink],
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  private _ar = inject(ActivatedRoute)
  public userServ = inject(UserService)
  private _title = inject(Title)
  private _router = inject(Router)

  private _renderer = inject(Renderer2)

  public pluralMap = {
    '=0': '0 repositorios públicos',
    '=1': '1 Repositorio públicos',
    'other': '# Repositorios públicos'
  }

  ngOnInit(): void {
    this._loadStyles()
    this._ar.params.subscribe(params => {
      const { username } = params

      if (!username) {
        this._router.navigate(['/users']);
        return;
      }
      this._title.setTitle(`Usuario - ${username}`)
      this.userServ.getUser(username)
    })
  }

  private _loadStyles() {
    const styles = this._renderer.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = "http://localhost:4202/assets/user-detail-styles.css";
    this._renderer.appendChild(document.head, styles);
  }
}
