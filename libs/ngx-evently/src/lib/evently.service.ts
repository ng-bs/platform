import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

let stream: Subject<any>;
function getStream() {
  stream = stream || new Subject();
  return stream;
}

@Injectable({
  providedIn: 'root'
})
export class EventlyDispatchService {
  /**
   * Dispatches an event payload.
   * @param payload The payload to be dispatched.
   */
  dispatch(payload: any): void {
    getStream().next(payload);
  }
}

@Injectable({
  providedIn: 'root'
})
export class EventlyEventService {
  /**
   * Observable of events which have been dispatched.
   */
  get events$(): Observable<any> {
    return getStream().pipe(
      filter(payload => !!payload),
    );
  }
}

