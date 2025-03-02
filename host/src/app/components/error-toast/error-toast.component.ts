import { Component, inject } from '@angular/core';
import { ErrorNotifierService } from '../../utils/error-notifier.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-toast',
  standalone: true,
  imports: [],
  templateUrl: './error-toast.component.html',
  styles: ``
})
export class ErrorToastComponent {
  private _notifierServ = inject(ErrorNotifierService)
  private _location = inject(Location)

  protected errorMsg = ''
  protected showToast = false;
  ngOnInit(): void {
    this._notifierServ.notifier.subscribe((error: any) => {
      this.errorMsg = `${error.status} - ${error.error.message}` || 'Ha ocurrido un error';
      console.log(error, 'notifier')
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
        this._location.back();
      }, 3000)
    })
  }
}
