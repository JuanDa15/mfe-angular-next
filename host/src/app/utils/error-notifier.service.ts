import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotifierService {
  private _notifier = new Subject()
  public notifier = this._notifier.asObservable()


  notifyError(error: any) {
    this._notifier.next(error)
  }
}
