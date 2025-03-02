import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user/:username',
    loadComponent: () => import('./pages/user/user.component').then(m => m.UserComponent)
  }
];
