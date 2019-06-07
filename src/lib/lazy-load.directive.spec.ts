import { LazyLoadDirective } from './lazy-load.directive';
import { TestBed } from '@angular/core/testing';
import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class MockElementRef {
  nativeElement: {};
}

// describe('LazyLoadDirective', () => {
//   it('should create an instance', () => {
//     TestBed.configureTestingModule({
//       providers: [{ provide: ElementRef, useValue: new MockElementRef() }]
//     });
//     const elRef: ElementRef = TestBed.get(ElementRef);
//     const directive = new LazyLoadDirective(elRef);
//     expect(directive).toBeTruthy();
//   });
// });
