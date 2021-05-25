import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }

  private subjectMenu = new Subject<any>();

  sendMessageMenu(message: boolean) {
    this.subjectMenu.next(message);
  }

  onMenuChange(): Observable<any> {
    return this.subjectMenu.asObservable();
  }

}
