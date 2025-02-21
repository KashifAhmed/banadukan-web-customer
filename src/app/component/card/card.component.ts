import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item;
  constructor(
    private route: Router
  ) { 
  }

  ngOnInit() {
    console.log("-- ITEM --", this.item);

  }


  openDetail(item){
    this.route.navigate(['details']);
  }
 
}
