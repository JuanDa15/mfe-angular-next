import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'followers/:username',
    loadComponent: () => import('./pages/followers/followers.component').then(c => c.FollowersComponent)
  }
];
