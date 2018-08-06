import { TestBed, inject } from '@angular/core/testing';

import { ResourceService } from './resource.service';
import {TrainerService} from './trainer.service';

describe('ResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceService]
    });
  });

  it('should be created', inject([ResourceService], (service: ResourceService) => {
    expect(service).toBeTruthy();
  }));
});

