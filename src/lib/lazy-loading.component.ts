import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lazy-loading',
  template: `
    <img
      lazy-load
      src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
    />
    <div></div>
    <img
      lazy-load
      src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn"
    />
    <div></div>

    <img
      lazy-load
      src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn"
    />
    <div></div>

    <img
      lazy-load
      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    />
    <div></div>

    <img
      lazy-load
      src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_175/f_auto,q_auto,w_1100/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg"
    />
    <div></div>

    <img
      lazy-load
      src="http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
    />
    <div></div>

    <img
      lazy-load
      src="https://www.petmd.com/sites/default/files/Senior-Cat-Care-2070625.jpg"
    />
    <div></div>

    <img
      lazy-load
      src="https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=vU0J0uZR"
    />
    <div></div>

    <img
      lazy-load
      src="https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg"
    />
    <div></div>

    <img
      [lazy-load]="my_custom_config"
      src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg"
    />
  `,
  styles: [
    `
      div {
        width: 500px;
        height: 500px;
        border: 2px solid black;
      }
    `
  ]
})
export class LazyLoadingComponent implements OnInit {
  my_custom_config: IntersectionObserverInit = {
    root: null,
    rootMargin: '300px 0px',
    threshold: 0.5
  };

  constructor() {}

  ngOnInit() {}
}
