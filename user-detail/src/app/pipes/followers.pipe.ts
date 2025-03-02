import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'followers',
  standalone: true
})
export class FollowersPipe implements PipeTransform {

  transform(value: number | null): string {
    if (!value) return "Sin seguidores";
    return value === 1 ? "1 seguidor" : `${Intl.NumberFormat('es-ES', {
      style: 'decimal'
    }).format(value)} seguidores`;
  }

}
