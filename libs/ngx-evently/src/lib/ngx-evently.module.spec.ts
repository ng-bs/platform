import { async, TestBed } from '@angular/core/testing';
import { NgxEventlyModule } from './ngx-evently.module';

describe('NgxEventlyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxEventlyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxEventlyModule).toBeDefined();
  });
});
