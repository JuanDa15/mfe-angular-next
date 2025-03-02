import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { StylesLoaderService } from '../../utils/styles-loader.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  template: `
    <div #container></div>
  `,
  styles: []
})
export class UsersComponent implements OnInit, AfterViewInit {
  private _stylesLoader = inject(StylesLoaderService)
  private _renderer = inject(Renderer2)
  @ViewChild('container', { static: true }) remoteContainer!: ElementRef;

  ngOnInit(): void {
    this._stylesLoader.loadStyles('http://localhost:3000/next-styles.css', this._renderer)
  }
  async ngAfterViewInit() {
    try {
      await loadRemoteModule({
        remoteEntry: 'http://localhost:3000/_next/static/chunks/remoteEntry.js',
        remoteName: 'userListMFE',
        exposedModule: './UserList',
      });

      const element = document.createElement('user-list');
      this.remoteContainer.nativeElement.appendChild(element);
    } catch (error) {
      console.error('Error cargando el módulo remoto:', error);
    }
  }
}
