import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    Hola Microfrontend User Followers
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'user-followers';
}
