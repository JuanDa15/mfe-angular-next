import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuarios',
    loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent),
    title: 'Usuarios de Github'
  },
  {
    path: 'seguidores/:username',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Followers',
      })
        .then(m => m.FollowersComponent),
    title: 'Seguidores de Github'
  },
  {
    path: 'usuario/:username',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './UserDetail',
      })
        .then(m => m.UserComponent),
    title: 'Detalle de Usuario de Github'
  },
  {
    path: '**',
    redirectTo: 'usuarios'
  }
];
