import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingComponent } from './lazy-loading.component';
import { LazyLoadDirective } from './lazy-load.directive';
import { ServiceModule } from './service/service.module';

describe('LazyLoadingComponent', () => {
  let component: LazyLoadingComponent;
  let fixture: ComponentFixture<LazyLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ServiceModule],
      declarations: [LazyLoadingComponent, LazyLoadDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
