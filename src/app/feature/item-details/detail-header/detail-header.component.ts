import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faGlobe, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss']
})
export class DetailHeaderComponent implements OnInit {


  faChevronLeft = faChevronLeft;
  faGlobe = faGlobe;
  faEnvelopeOpen = faEnvelopeOpen;
  
  constructor() { }

  ngOnInit() {
  }

}
