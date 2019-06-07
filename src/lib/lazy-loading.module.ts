import { NgModule } from '@angular/core';
import { LazyLoadDirective } from './lazy-load.directive';
import { ServiceModule } from './service/service.module';

@NgModule({
  declarations: [LazyLoadDirective],
  imports: [ServiceModule],
  exports: [LazyLoadDirective]
})
export class LazyLoadingModule {}
