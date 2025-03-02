
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorToastComponent } from './components/error-toast/error-toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ErrorToastComponent],
  template: `
    <div class="max-w-screen-xl mx-auto">
      <router-outlet></router-outlet>
      <app-error-toast />
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'host';

}
