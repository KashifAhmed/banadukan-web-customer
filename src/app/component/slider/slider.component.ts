import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/1024/350?random&t=${Math.random()}`);
  constructor() { 

    
  }

  ngOnInit() {
  }

}
