import { UserList } from '@/interfaces/user';
import { Component, Input } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'user-list-card',
  standalone: true,
  imports: [SpinnerComponent, ButtonComponent, RouterLink],
  templateUrl: './user-list-card.component.html',
  styles: []
})
export class UserListCardComponent {
  @Input() user: UserList | null = null
}
