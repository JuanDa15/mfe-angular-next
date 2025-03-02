import { Component, Input } from '@angular/core';

@Component({
  selector: 'Button',
  standalone: true,
  imports: [],
  template: `
    <button
      [attr.type]="type"
      [class]="baseClass + ' ' + btnStyles[btnStyle] + ' ' + className"
    >
      <ng-content select="*"></ng-content>
    </button>
  `,
  styles: [],
})
export class ButtonComponent {
  protected baseClass = 'rounded-full text-sm px-4 py-2 active:brightness-125 hover:brightness-90 focus:outline-none font-medium border'

  protected btnStyles: Record<string, string> = {
    'primary': 'text-primary-text bg-primary border-0',
    'secondary': 'text-primary-text bg-secondary border-boder-color',
    'tertiary': 'text-primary-text bg-accent border-boder-color',
    'icon': 'border-0 rounded-full p-2 hover:backdrop-brightness-90 aspect-square',
  }
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() btnStyle: 'primary' | 'secondary' | 'tertiary' | 'icon' = 'primary';
  @Input() className: string = '';
}
