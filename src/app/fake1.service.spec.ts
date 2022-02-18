import { TestBed } from '@angular/core/testing';

import { Fake1Service } from './fake1.service';
describe('Fake1Service', () => {
  let service: Fake1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fake1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
