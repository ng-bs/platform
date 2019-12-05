import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventlyService {
  private stream = new Subject<any>();

  get events$(): Observable<any> {
    return this.stream.pipe(
      filter(payload => !!payload),
    );
  }

  dispatch(payload: any): void {
    this.stream.next(payload);
  }

  // TODO: Consider a function that takes in an observable, which values would
  //      be merged into the events observable
}

