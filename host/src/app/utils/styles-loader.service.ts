import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesLoaderService {

  public loadStyles(stylesPath: string, renderer2: Renderer2): void {
    const styles = renderer2.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = stylesPath;
    renderer2.appendChild(document.head, styles);
  }
}
