import { Injectable } from '@angular/core';
import { ServiceModule } from './service.module';

class ImageObserver extends IntersectionObserver {
  numElements = 0;
  config_str: string; // used for comparison

  constructor(config: IntersectionObserverInit) {
    super((entries: IntersectionObserverEntry[]) => {
      this._onIntersection(entries);
    }, config);
    this.config_str = JSON.stringify(config);
  }

  private _onIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        this.numElements--;
        this.unobserve(entry.target);
        this._preloadImage(entry.target);
        if (this.numElements <= 0) {
          this.disconnect();
        }
      }
    });
  }

  public observe(target: Element) {
    this.numElements++;
    super.observe(target);
  }

  private async _preloadImage(image: Element) {
    const src = image.getAttribute('data-src');
    // await this._fetchImage(src);
    this._applyImage(image, src);
  }
  // likely not necessary (doubles amount of requests);
  // private _fetchImage(url) {
  //   return new Promise(function(resolve, reject) {
  //     const image = new Image();
  //     image.src = url;
  //     image.onload = resolve;
  //     image.onerror = reject;
  //   });
  // }

  private _applyImage(img: Element, src: string) {
    img.setAttribute('src', src);
  }
}

@Injectable({
  providedIn: ServiceModule
})
export class LazyLoadingService {
  private default_config: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px 0px',
    threshold: 0.01
  };
  private observers: ImageObserver[] = [];
  private indexOfDefaultObserver: number;
  constructor() {
    console.log('initializing lazy load service');
  }

  /**
   * @param element - The element to observe
   * @param options - (optional) - the intersection observer config see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   */
  public observe(element: Element, config?: IntersectionObserverInit): void {
    const index = this._registerObserverAndReturnIndex(config);
    this.observers[index].observe(element);
  }

  private _registerObserverAndReturnIndex(
    config?: IntersectionObserverInit
  ): number {
    // check if filter with properties doesn't already exist;
    if (config) {
      const config_str = JSON.stringify(config);
      const index = this._checkIfConfigAlreadyExistsAndReturnIndex(config_str);
      if (index !== -1) {
        return index;
      } else {
        this.observers.push(new ImageObserver(config));
        return this.observers.length - 1;
      }
    } else {
      if (typeof this.indexOfDefaultObserver === 'undefined') {
        this.observers.push(new ImageObserver(this.default_config));
        this.indexOfDefaultObserver = this.observers.length - 1;
      }
      return this.indexOfDefaultObserver;
    }
  }

  private _checkIfConfigAlreadyExistsAndReturnIndex(
    config_str: string
  ): number {
    for (let i; i < this.observers.length; i++) {
      if (this.observers[i].config_str === config_str) {
        return i;
      }
    }
    return -1;
  }
}
