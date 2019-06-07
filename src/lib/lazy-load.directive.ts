import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import { LazyLoadingService } from './service/lazy-loading.service';

@Directive({
  selector: '[lazy-load]'
})
export class LazyLoadDirective implements AfterViewInit {
  private mySrc: string;
  private element: Element;
  private supported = true;
  @Input('lazy-load') config: IntersectionObserverInit;
  constructor(
    private el: ElementRef,
    private lazyLoadService: LazyLoadingService
  ) {}

  public ngAfterViewInit() {
    if (typeof window['IntersectionObserver'] === 'undefined') {
      console.log('stop using internet explorer you fiend');
      this.supported = false;
      return;
    }
    this.element = this.el.nativeElement;
    // prevent image from loading initially and save image source;

    this.mySrc = this.element.getAttribute('src');

    this.element.setAttribute('data-src', this.mySrc);
    this.element.setAttribute('src', '');
    if (this.supported) {
      this.lazyLoadService.observe(this.element, this.config);
    }
  }
}
