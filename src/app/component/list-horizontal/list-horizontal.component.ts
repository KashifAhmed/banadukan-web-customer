import { Component, OnInit, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-horizontal',
  templateUrl: './list-horizontal.component.html',
  styleUrls: ['./list-horizontal.component.scss']
})
export class ListHorizontalComponent implements OnInit {
  @Input() row;
  @Input() title;
  faSearch = faSearch;
  constructor() { 
    
  }

  ngOnInit() {
    console.log("List", this.row);
  }

}
