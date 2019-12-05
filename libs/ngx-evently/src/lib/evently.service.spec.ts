import { EventlyDispatchService, EventlyEventService } from './evently.service';

describe('EventlyService', () => {
  let dispatchService: EventlyDispatchService;
  let eventService: EventlyEventService;

  beforeEach(() => {
    dispatchService = new EventlyDispatchService();
    eventService = new EventlyEventService();
  });

  it('should emit a payload', () => {
    const value = 'test payload';
    let result;

    eventService.events$.subscribe(payload => result = payload);
    dispatchService.dispatch(value);

    expect(value).toEqual(result);
  });

  it('should filter out falsey payloads', () => {
    const spy = jest.fn();

    eventService.events$.subscribe(spy);
    dispatchService.dispatch(null);
    dispatchService.dispatch(undefined);

    expect(spy).toHaveBeenCalledTimes(0);
  });
});
