import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TheRearService } from './the-rear.service';

// describe('TheRearService', () => {
//   let service: TheRearService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     const service = TestBed.inject(TheRearService);
//     imports: [HttpClientTestingModule, HttpClientModule];
//     providers: [TheRearService];
//   });

//   it('should be created', () => {
//     const service: TheRearService = TestBed.get(TheRearService);
//     expect(service).toBeTruthy();
//   });
// });
